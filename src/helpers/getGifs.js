export const getGifs = async (category) => {

    const apiKey = 'PlJKw63cBLxFKbKPjpZ2PGigpPfa0rcx';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=PlJKw63cBLxFKbKPjpZ2PGigpPfa0rcx`;
    const response = await fetch(url);
    const { data } = await response.json();


    //console.log(data[0]);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    //console.log(gifs);
    //setImages(gifs);
}