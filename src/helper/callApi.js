export const datesStore = async () => {
    const apiUrl =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

    try {
        const dataStore = await fetch(apiUrl);
        const jsonDataStore = await dataStore.json();
        return jsonDataStore;
    } catch (error) {
        return error;
    }
};

datesStore();