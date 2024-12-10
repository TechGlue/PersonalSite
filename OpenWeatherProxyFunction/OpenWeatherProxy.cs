using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OpenWeatherProxyFunction
{
    public class OpenWeatherProxy
    {
        private readonly ILogger<OpenWeatherProxy> _logger;

        public OpenWeatherProxy(ILogger<OpenWeatherProxy> logger)
        {
            _logger = logger;
        }

        [Function("OpenWeatherProxy")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult("Hello from the OpenWeatherProxy");
        }
    }
}
