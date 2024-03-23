/**
 * An option that can be shown on the selector
 */
export interface IOption {
  /**
   * The name/label to show for the option.
   *
   * For example, 'English' or 'German' in the Google Translate example
   */
  name: string;
  /** Is this option active */
  active: boolean;
  /** Optional key for React iteration - will use `name` by default */
  key?: string;
}

/**
 * A list of options to be shown
 */
export type Options = Array<IOption>;
