export const GetCurrentDate = (): string => {

    const dateObject: Date = new Date();
    const day: number = dateObject.getDate();
    const month: string = dateObject.toLocaleString("default", {month: 'long'});
    const year: number = dateObject.getFullYear();

    const ordinalNumberSuffix = (day: number): string  => {
        if (day > 3 && day < 21) return "th" as string;

        switch(day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    return `Last Updated ${month} ${day}${ordinalNumberSuffix(day)}, ${year}` as string;
}