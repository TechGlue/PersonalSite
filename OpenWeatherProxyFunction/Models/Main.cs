namespace OpenWeatherProxyFunction.Models;

public class Main
{
    public required double Temp { get; set; }
    public required double Feels_Like { get; set; }
    public required double Temp_Min { get; set; }
    public required double Temp_Max { get; set; }
    public required int Pressure { get; set; }
    public required int Humidity { get; set; }
    public required int Sea_Level { get; set; }
    public required int Grnd_Level { get; set; }
}