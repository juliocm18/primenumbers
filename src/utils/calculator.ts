
export default class Calculator {

    public static getPrimeNumbersUntil(number: number) {
        const primeList = [];
        for (let i = number; i >= 1; i--)
            if (this.isPrime(i))
                primeList.push(i);
    
        return primeList;
    }

    public static isPrime = (number: number) => {
        if (number % 2 == 0 && number != 2)
            return false;
        for (let x = 3; x * x <= number; x += 2)
            if (number % x == 0)
                return false;
        return true;
    }

}