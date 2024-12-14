using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenWeatherProxyFunction.Models;
using OpenWeatherProxyFunction.Services;

namespace OpenWeatherProxyFunction
{
    public class OpenWeatherProxy
    {
        private readonly ILogger<OpenWeatherProxy> _logger;

        public OpenWeatherProxy(ILogger<OpenWeatherProxy> logger)
        {
            _logger = logger;
        }

        [Function("OpenWeatherData-GET")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "WeatherProxy/")] HttpRequest req)
        {
            _logger.LogInformation("Calling OpenWeather API");
            Weather? result;

            string? openWeatherApiUrl = Environment.GetEnvironmentVariable("OpenWeatherAPIUrl");

            if (openWeatherApiUrl is null || openWeatherApiUrl.Equals(string.Empty))
            {
                throw new KeyNotFoundException("\"OpenWeatherAPIUrl\" has not been configured.");
            }

            using (HttpClient httpClient = new HttpClient())
            {
                WeatherProxyService weatherProxyService = new WeatherProxyService(httpClient, openWeatherApiUrl);

                var val = await weatherProxyService.GetOpenWeatherData();

                result = val;
            }

            if (result is not null)
            {
                return new OkObjectResult(result);
            }

            return new BadRequestResult();
        }
    }
}
