import * as FormatData from "./interfaceFormat"

export const iconCodeList = [
    { code: 1000, day: "sunny", night: "clear" },
    { code: 1003, day: "partly-cloudy", night: "partly-cloudy" },
    { code: 1006, day: "cloudy", night: "cloudy" },
    { code: 1009, day: "overcast", night: "overcast" },
    { code: 1030, day: "mist", night: "mist" },
    { code: 1063, day: "patchy-rain-nearby", night: "patchy-rain-nearby" },
    { code: 1066, day: "patchy-snow-nearby", night: "patchy-snow-nearby" },
    { code: 1069, day: "patchy-sleet-nearby", night: "patchy-sleet-nearby" },
    { code: 1072, day: "patchy-freezing-drizzle-nearby", night: "patchy-freezing-drizzle-nearby" },
    { code: 1087, day: "thundery-outbreaks-in-nearby", night: "thundery-outbreaks-in-nearby" },
    { code: 1114, day: "blowing-snow", night: "blowing-snow" },
    { code: 1117, day: "blizzard", night: "blizzard" },
    { code: 1135, day: "fog", night: "fog" },
    { code: 1147, day: "freezing-fog", night: "freezing-fog" },
    { code: 1150, day: "patchy-light-drizzle", night: "patchy-light-drizzle" },
    { code: 1153, day: "light-drizzle", night: "light-drizzle" },
    { code: 1168, day: "freezing-drizzle", night: "freezing-drizzle" },
    { code: 1171, day: "heavy-freezing-drizzle", night: "heavy-freezing-drizzle" },
    { code: 1180, day: "patchy-light-rain", night: "patchy-light-rain" },
    { code: 1183, day: "light-rain", night: "light-rain" },
    { code: 1186, day: "moderate-rain-at-times", night: "moderate-rain-at-times" },
    { code: 1189, day: "moderate-rain", night: "moderate-rain" },
    { code: 1192, day: "heavy-rain-at-times", night: "heavy-rain-at-times" },
    { code: 1195, day: "heavy-rain", night: "heavy-rain" },
    { code: 1198, day: "light-freezing-rain", night: "light-freezing-rain" },
    { code: 1201, day: "moderate-or-heavy-freezing-rain", night: "moderate-or-heavy-freezing-rain" },
    { code: 1204, day: "light-sleet", night: "light-sleet" },
    { code: 1207, day: "moderate-or-heavy-sleet", night: "moderate-or-heavy-sleet" },
    { code: 1210, day: "patchy-light-snow", night: "patchy-light-snow" },
    { code: 1213, day: "light-snow", night: "light-snow" },
    { code: 1216, day: "patchy-moderate-snow", night: "patchy-moderate-snow" },
    { code: 1219, day: "moderate-snow", night: "moderate-snow" },
    { code: 1222, day: "patchy-heavy-snow", night: "patchy-heavy-snow" },
    { code: 1225, day: "heavy-snow", night: "heavy-snow" },
    { code: 1237, day: "ice-pellets", night: "ice-pellets" },
    { code: 1240, day: "light-rain-shower", night: "light-rain-shower" },
    { code: 1243, day: "moderate-or-heavy-rain-shower", night: "moderate-or-heavy-rain-shower" },
    { code: 1246, day: "torrential-rain-shower", night: "torrential-rain-shower" },
    { code: 1249, day: "light-sleet-showers", night: "light-sleet-showers" },
    { code: 1252, day: "moderate-or-heavy-sleet-showers", night: "moderate-or-heavy-sleet-showers" },
    { code: 1255, day: "light-snow-showers", night: "light-snow-showers" },
    { code: 1258, day: "moderate-or-heavy-snow-showers", night: "moderate-or-heavy-snow-showers" },
    { code: 1261, day: "light-showers-of-ice-pellets", night: "light-showers-of-ice-pellets" },
    { code: 1264, day: "moderate-or-heavy-showers-of-ice-pellets", night: "moderate-or-heavy-showers-of-ice-pellets" },
    { code: 1273, day: "patchy-light-rain-in-area-with-thunder", night: "patchy-light-rain-in-area-with-thunder" },
    { code: 1276, day: "moderate-or-heavy-rain-in-area-with-thunder", night: "moderate-or-heavy-rain-in-area-with-thunder" },
    { code: 1279, day: "patchy-light-snow-in-area-with-thunder", night: "patchy-light-snow-in-area-with-thunder" },
    { code: 1282, day: "moderate-or-heavy-snow-in-area-with-thunder", night: "moderate-or-heavy-snow-in-area-with-thunder" },
]

export const iconRequireList = {
    "d1000": require('../assets/photos/weather/Day/sunny.png'),
    "n1000": require('../assets/photos/weather/Night/clear.png'),
    "d1003": require('../assets/photos/weather/Day/partly-cloudy.png'),
    "n1003": require('../assets/photos/weather/Night/partly-cloudy.png'),
    "d1006": require('../assets/photos/weather/Day/cloudy.png'),
    "n1006": require('../assets/photos/weather/Night/cloudy.png'),
    "d1009": require('../assets/photos/weather/Day/overcast.png'),
    "n1009": require('../assets/photos/weather/Night/overcast.png'),
    "d1030": require('../assets/photos/weather/Day/mist.png'),
    "n1030": require('../assets/photos/weather/Night/mist.png'),
    "d1063": require('../assets/photos/weather/Day/patchy-rain-nearby.png'),
    "n1063": require('../assets/photos/weather/Night/patchy-rain-nearby.png'),
    "d1066": require('../assets/photos/weather/Day/patchy-snow-nearby.png'),
    "n1066": require('../assets/photos/weather/Night/patchy-snow-nearby.png'),
    "d1069": require('../assets/photos/weather/Day/patchy-sleet-nearby.png'),
    "n1069": require('../assets/photos/weather/Night/patchy-sleet-nearby.png'),
    "d1072": require('../assets/photos/weather/Day/patchy-freezing-drizzle-nearby.png'),
    "n1072": require('../assets/photos/weather/Night/patchy-freezing-drizzle-nearby.png'),
    "d1087": require('../assets/photos/weather/Day/thundery-outbreaks-in-nearby.png'),
    "n1087": require('../assets/photos/weather/Night/thundery-outbreaks-in-nearby.png'),
    "d1114": require('../assets/photos/weather/Day/blowing-snow.png'),
    "n1114": require('../assets/photos/weather/Night/blowing-snow.png'),
    "d1117": require('../assets/photos/weather/Day/blizzard.png'),
    "n1117": require('../assets/photos/weather/Night/blizzard.png'),
    "d1135": require('../assets/photos/weather/Day/fog.png'),
    "n1135": require('../assets/photos/weather/Night/fog.png'),
    "d1147": require('../assets/photos/weather/Day/freezing-fog.png'),
    "n1147": require('../assets/photos/weather/Night/freezing-fog.png'),
    "d1150": require('../assets/photos/weather/Day/patchy-light-drizzle.png'),
    "n1150": require('../assets/photos/weather/Night/patchy-light-drizzle.png'),
    "d1153": require('../assets/photos/weather/Day/light-drizzle.png'),
    "n1153": require('../assets/photos/weather/Night/light-drizzle.png'),
    "d1168": require('../assets/photos/weather/Day/freezing-drizzle.png'),
    "n1168": require('../assets/photos/weather/Night/freezing-drizzle.png'),
    "d1171": require('../assets/photos/weather/Day/heavy-freezing-drizzle.png'),
    "n1171": require('../assets/photos/weather/Night/heavy-freezing-drizzle.png'),
    "d1180": require('../assets/photos/weather/Day/patchy-light-rain.png'),
    "n1180": require('../assets/photos/weather/Night/patchy-light-rain.png'),
    "d1183": require('../assets/photos/weather/Day/light-rain.png'),
    "n1183": require('../assets/photos/weather/Night/light-rain.png'),
    "d1186": require('../assets/photos/weather/Day/moderate-rain-at-times.png'),
    "n1186": require('../assets/photos/weather/Night/moderate-rain-at-times.png'),
    "d1189": require('../assets/photos/weather/Day/moderate-rain.png'),
    "n1189": require('../assets/photos/weather/Night/moderate-rain.png'),
    "d1192": require('../assets/photos/weather/Day/heavy-rain-at-times.png'),
    "n1192": require('../assets/photos/weather/Night/heavy-rain-at-times.png'),
    "d1195": require('../assets/photos/weather/Day/heavy-rain.png'),
    "n1195": require('../assets/photos/weather/Night/heavy-rain.png'),
    "d1198": require('../assets/photos/weather/Day/light-freezing-rain.png'),
    "n1198": require('../assets/photos/weather/Night/light-freezing-rain.png'),
    "d1201": require('../assets/photos/weather/Day/moderate-or-heavy-freezing-rain.png'),
    "n1201": require('../assets/photos/weather/Night/moderate-or-heavy-freezing-rain.png'),
    "d1204": require('../assets/photos/weather/Day/light-sleet.png'),
    "n1204": require('../assets/photos/weather/Night/light-sleet.png'),
    "d1207": require('../assets/photos/weather/Day/moderate-or-heavy-sleet.png'),
    "n1207": require('../assets/photos/weather/Night/moderate-or-heavy-sleet.png'),
    "d1210": require('../assets/photos/weather/Day/patchy-light-snow.png'),
    "n1210": require('../assets/photos/weather/Night/patchy-light-snow.png'),
    "d1213": require('../assets/photos/weather/Day/light-snow.png'),
    "n1213": require('../assets/photos/weather/Night/light-snow.png'),
    "d1216": require('../assets/photos/weather/Day/patchy-moderate-snow.png'),
    "n1216": require('../assets/photos/weather/Night/patchy-moderate-snow.png'),
    "d1219": require('../assets/photos/weather/Day/moderate-snow.png'),
    "n1219": require('../assets/photos/weather/Night/moderate-snow.png'),
    "d1222": require('../assets/photos/weather/Day/patchy-heavy-snow.png'),
    "n1222": require('../assets/photos/weather/Night/patchy-heavy-snow.png'),
    "d1225": require('../assets/photos/weather/Day/heavy-snow.png'),
    "n1225": require('../assets/photos/weather/Night/heavy-snow.png'),
    "d1237": require('../assets/photos/weather/Day/ice-pellets.png'),
    "n1237": require('../assets/photos/weather/Night/ice-pellets.png'),
    "d1240": require('../assets/photos/weather/Day/light-rain-shower.png'),
    "n1240": require('../assets/photos/weather/Night/light-rain-shower.png'),
    "d1243": require('../assets/photos/weather/Day/moderate-or-heavy-rain-shower.png'),
    "n1243": require('../assets/photos/weather/Night/moderate-or-heavy-rain-shower.png'),
    "d1246": require('../assets/photos/weather/Day/torrential-rain-shower.png'),
    "n1246": require('../assets/photos/weather/Night/torrential-rain-shower.png'),
    "d1249": require('../assets/photos/weather/Day/light-sleet-showers.png'),
    "n1249": require('../assets/photos/weather/Night/light-sleet-showers.png'),
    "d1252": require('../assets/photos/weather/Day/moderate-or-heavy-sleet-showers.png'),
    "n1252": require('../assets/photos/weather/Night/moderate-or-heavy-sleet-showers.png'),
    "d1255": require('../assets/photos/weather/Day/light-snow-showers.png'),
    "n1255": require('../assets/photos/weather/Night/light-snow-showers.png'),
    "d1258": require('../assets/photos/weather/Day/moderate-or-heavy-snow-showers.png'),
    "n1258": require('../assets/photos/weather/Night/moderate-or-heavy-snow-showers.png'),
    "d1261": require('../assets/photos/weather/Day/light-showers-of-ice-pellets.png'),
    "n1261": require('../assets/photos/weather/Night/light-showers-of-ice-pellets.png'),
    "d1264": require('../assets/photos/weather/Day/moderate-or-heavy-showers-of-ice-pellets.png'),
    "n1264": require('../assets/photos/weather/Night/moderate-or-heavy-showers-of-ice-pellets.png'),
    "d1273": require('../assets/photos/weather/Day/patchy-light-rain-in-area-with-thunder.png'),
    "n1273": require('../assets/photos/weather/Night/patchy-light-rain-in-area-with-thunder.png'),
    "d1276": require('../assets/photos/weather/Day/moderate-or-heavy-rain-in-area-with-thunder.png'),
    "n1276": require('../assets/photos/weather/Night/moderate-or-heavy-rain-in-area-with-thunder.png'),
    "d1279": require('../assets/photos/weather/Day/patchy-light-snow-in-area-with-thunder.png'),
    "n1279": require('../assets/photos/weather/Night/patchy-light-snow-in-area-with-thunder.png'),
    "d1282": require('../assets/photos/weather/Day/moderate-or-heavy-snow-in-area-with-thunder.png'),
    "n1282": require('../assets/photos/weather/Night/moderate-or-heavy-snow-in-area-with-thunder.png'),
}