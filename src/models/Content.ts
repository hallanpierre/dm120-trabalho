export default class Content {

  private temperatura: string = "0";
  private tempMax: string = "0";
  private tempMin: string = "0";
  private luminosidade: string = "0";
  private lumMax: string = "0";
  private lumMin: string = "0";
  private umidade: string = "0";
  private umidMax: string = "0";
  private umidMin: string = "0";
  private statusBuzzer: string = "0";
  private current_color: string = "0";

  constructor(temperatura: string, tempMax: string, tempMin: string,
    luminosidade: string, lumMax: string, lumMin: string,
    umidade: string, umidMax: string, umidMin: string, statusBuzzer: string, current_color: string) {
    this.temperatura = temperatura
    this.tempMax = tempMax
    this.tempMin = tempMin
    this.luminosidade = luminosidade
    this.lumMax = lumMax
    this.lumMin = lumMin
    this.umidade = umidade
    this.umidMax = umidMax
    this.umidMin = umidMin
    this.statusBuzzer = statusBuzzer
    this.current_color = current_color
  }

  /**
   * Getter $temperatura
   * @return {string }
   */
  public get $temperatura(): string {
    return this.temperatura;
  }

  /**
   * Setter $temperatura
   * @param {string } value
   */
  public set $temperatura(value: string) {
    this.temperatura = value;
  }

  /**
   * Getter $luminosidade
   * @return {string }
   */
  public get $luminosidade(): string {
    return this.luminosidade;
  }

  /**
   * Setter $luminosidade
   * @param {string } value
   */
  public set $luminosidade(value: string) {
    this.luminosidade = value;
  }

  /**
   * Getter $umidade
   * @return {string }
   */
  public get $umidade(): string {
    return this.umidade;
  }

  /**
   * Setter $umidade
   * @param {string } value
   */
  public set $umidade(value: string) {
    this.umidade = value;
  }

  /**
   * Getter $tempMax
   * @return {string }
   */
  public get $tempMax(): string {
    return this.tempMax;
  }

  /**
   * Setter $tempMax
   * @param {string } value
   */
  public set $tempMax(value: string) {
    this.tempMax = value;
  }

  /**
   * Getter $tempMin
   * @return {string }
   */
  public get $tempMin(): string {
    return this.tempMin;
  }

  /**
   * Setter $tempMin
   * @param {string } value
   */
  public set $tempMin(value: string) {
    this.tempMin = value;
  }

  /**
   * Getter $lumMax
   * @return {string }
   */
  public get $lumMax(): string {
    return this.lumMax;
  }

  /**
   * Setter $lumMax
   * @param {string } value
   */
  public set $lumMax(value: string) {
    this.lumMax = value;
  }

  /**
   * Getter $lumMin
   * @return {string }
   */
  public get $lumMin(): string {
    return this.lumMin;
  }

  /**
   * Setter $lumMin
   * @param {string } value
   */
  public set $lumMin(value: string) {
    this.lumMin = value;
  }

  /**
   * Getter $umidMax
   * @return {string }
   */
  public get $umidMax(): string {
    return this.umidMax;
  }

  /**
   * Setter $umidMax
   * @param {string } value
   */
  public set $umidMax(value: string) {
    this.umidMax = value;
  }

  /**
   * Getter $umidMin
   * @return {string }
   */
  public get $umidMin(): string {
    return this.umidMin;
  }

  /**
   * Setter $umidMin
   * @param {string } value
   */
  public set $umidMin(value: string) {
    this.umidMin = value;
  }

  /**
   * Getter $buzzer
   * @return {string }
   */
  public get $statusBuzzer(): string {
    return this.statusBuzzer;
  }

  /**
   * Setter $buzzer
   * @param {string } value
   */
  public set $statusBuzzer(value: string) {
    this.statusBuzzer = value;
  }

  /**
   * Getter $led
   * @return {string }
   */
  public get $current_color(): string {
    return this.current_color;
  }

  /**
   * Setter $led
   * @param {string } value
   */
  public set $current_color(value: string) {
    this.current_color = value;
  }

}​​​​
