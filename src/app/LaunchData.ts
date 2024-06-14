export interface LaunchData {
  links: {
    patch: {
      small: string | null,
      large: string | null,
    },
    reddit: {
      campaign: string | null,
      launch: string | null,
      media: string | null,
      recovery: string | null
    },
    flickr: {
      small: string[],
      original: string[]
    },
    presskit: string | null,
    webcast: string | null,
    youtube_id: string | null,
    article: string | null,
    wikipedia: string | null
  },
  details: string | null,
  flight_number: string | null,
  name: string | null,
  date_utc: string | null,
}