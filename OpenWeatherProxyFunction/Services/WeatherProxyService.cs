using System.Net.Http.Json;
using System.Runtime.CompilerServices;
using System.Text.Json;
using OpenWeatherProxyFunction.Models;

namespace OpenWeatherProxyFunction.Services;

public class WeatherProxyService
{
    private readonly HttpClient _client;
    private readonly string _url;

    public WeatherProxyService(HttpClient client, string weatherAPIURL)
    {
        _client = client;
        _url = weatherAPIURL;
    }

    public async Task<Weather?> GetOpenWeatherData()
    {
        var response = await _client.GetAsync(new Uri(_url));

        if (response.EnsureSuccessStatusCode().IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            var options = new JsonSerializerOptions
            {
               PropertyNameCaseInsensitive = true,
            };

            Weather? weatherForecast =
                JsonSerializer.Deserialize<Weather>(responseBody, options);

            if (weatherForecast is null)
            {
                throw new JsonException("Unable to deserialize and bind to weather object.");
            }
            
            return weatherForecast;
        }

        return null;
    }
}