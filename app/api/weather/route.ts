import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get('lat');
  const lon = req.nextUrl.searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Missing latitude or longitude' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    // First, get location name from coordinates using Geocoding API
    const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    if (geoRes.status !== 200) {
      return NextResponse.json({ error: 'Failed to get location data' }, { status: geoRes.status });
    }

    const locationName = geoData[0]?.name || 'Unknown Location';

    // Then get weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();

    if (weatherRes.status !== 200) {
      return NextResponse.json({ error: weatherData.message }, { status: weatherRes.status });
    }

    return NextResponse.json({
      icon: weatherData.weather[0].icon,
      description: weatherData.weather[0].description,
      temp: weatherData.main.temp,
      location: locationName,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Weather request failed' }, { status: 500 });
  }
}
