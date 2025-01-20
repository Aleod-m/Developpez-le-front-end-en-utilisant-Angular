import { Participation } from "./Participation";

/**
 * Type for the data of a country.
 * Example of an olympic country:
 *   {
 *       id: 1,
 *       country: "Italy",
 *       participations: []
 *   }
 */
export interface OlympicCountry {
  /** Id of the country. */
  id: number,
  /** Name of the country. */
  country: string,
  /** List of participations of the country. */
  participations: Array<Participation>,
}
