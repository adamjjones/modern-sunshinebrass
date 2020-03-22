using System;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;
// using NewtonSoft.Json;

namespace sunshinebrass.Models
{
  public class Events
  {
    public int Id { get; set; }
    public string Date { get; set; }
    public string Time { get; set; }

    [JsonProperty("event_name")]
    public string EventName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }

    [JsonProperty("band_url")]
    public string BandUrl { get; set; }
    [JsonProperty("venue_url")]
    public string VenueUrl { get; set; }
    public string Notes { get; set; }
  }
}