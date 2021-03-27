export class Weather {
    public temperature? : number;
    public cityName?: string;
    public weatherImage?: string;
    public description?: string;
    public windSpeed?: number;
    public date?: string;

    constructor(temp?: number, city?: string, img?: string, desc?: string, speed?: number, date?: string) {
        this.temperature = temp;
        this.cityName = city;
        this.weatherImage = img;
        this.description = desc;
        this.windSpeed = speed;
        this.date = date;
    }

    

}