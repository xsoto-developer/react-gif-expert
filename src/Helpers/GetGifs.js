export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2uyzMU7OrMQ7ms9bEghkptpFr7COd5XC&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data)

    const gits = data.map(img => (
        {
            id: img.id,
            title: img.title,
            // url: img.images.downsized_medium.url
            url: img.images.downsized_still.url
            // url: img.images.downsized_small.mp4

            // {
            //     "height": "480",
            //     "width": "480",
            //     "size": "1672058",
            //     "url": "https://media0.giphy.com/media/ZnZrgIwPaDcnS/480w_s.jpg?cid=6be514c4jxsh9balxy3c6g5l60kz7s2nrglvsz81hoer0tsv&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
            // }
        }
    ))
    console.log(gits)
    return gits;
}