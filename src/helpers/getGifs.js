export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WT8OA8tbezhB2pb8VEa8IDBbdY3GaZNr&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // const { data } = test;
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;

}







const test = {
    "data": [
        {
            "type": "gif",
            "id": "TjAcxImn74uoDYVxFl",
            "url": "https://giphy.com/gifs/fcbarcelona-goat-messi-leo-TjAcxImn74uoDYVxFl",
            "slug": "fcbarcelona-goat-messi-leo-TjAcxImn74uoDYVxFl",
            "bitly_gif_url": "https://gph.is/g/E3nrQ6x",
            "bitly_url": "https://gph.is/g/E3nrQ6x",
            "embed_url": "https://giphy.com/embed/TjAcxImn74uoDYVxFl",
            "username": "fcbarcelona",
            "source": "www.fcbarcelona.com",
            "title": "Lionel Messi Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2020-06-23 17:45:29",
            "trending_datetime": "2021-04-29 18:23:33",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "8386108",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "1696137",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "3069084",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "96",
                    "hash": "810c20b7eacdaaf1fe779db973515a14"
                },
                "downsized": {
                    "height": "258",
                    "width": "258",
                    "size": "1756741",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "480",
                    "width": "480",
                    "size": "6235988",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized-large.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-large.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "384",
                    "width": "384",
                    "size": "4310043",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized-medium.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
                },
                "downsized_small": {
                    "height": "400",
                    "width": "400",
                    "mp4_size": "198507",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "258",
                    "width": "258",
                    "size": "12965",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "1506132",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "344983",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "751082",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "85694",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "59612",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "507488",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "123615",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "229514",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "3664",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "200",
                    "size": "8600",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "1506132",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "344983",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "606912",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "85694",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "59612",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "507488",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "123615",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "229514",
                    "webp": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "3664",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "200",
                    "width": "200",
                    "size": "8600",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "6915188",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "480",
                    "width": "480",
                    "size": "32489",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "480",
                    "width": "480",
                    "mp4_size": "1696137",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "88",
                    "width": "88",
                    "mp4_size": "44874",
                    "mp4": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "100",
                    "width": "100",
                    "size": "43990",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "100",
                    "width": "100",
                    "size": "35184",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "480",
                    "width": "480",
                    "size": "8386108",
                    "url": "https://media1.giphy.com/media/TjAcxImn74uoDYVxFl/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVRqQWN4SW1uNzR1b0RZVnhGbCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVRqQWN4SW1uNzR1b0RZVnhGbCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVRqQWN4SW1uNzR1b0RZVnhGbCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVRqQWN4SW1uNzR1b0RZVnhGbCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Sports gif. Lionel Messi FC Barcelona, counting on his fingers one two three, then pointing at us and winking."
        },
        {
            "type": "gif",
            "id": "PnPU9GhN3V7oVizSHG",
            "url": "https://giphy.com/gifs/fcbarcelona-PnPU9GhN3V7oVizSHG",
            "slug": "fcbarcelona-PnPU9GhN3V7oVizSHG",
            "bitly_gif_url": "https://gph.is/g/aXmKeLA",
            "bitly_url": "https://gph.is/g/aXmKeLA",
            "embed_url": "https://giphy.com/embed/PnPU9GhN3V7oVizSHG",
            "username": "fcbarcelona",
            "source": "http://www.fcbarcelona.com",
            "title": "La Liga Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.fcbarcelona.com",
            "source_post_url": "http://www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2019-10-11 11:37:15",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "5910810",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "1365991",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "2876550",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "58",
                    "hash": "628aec234b608a419b716f7b889864eb"
                },
                "downsized": {
                    "height": "288",
                    "width": "288",
                    "size": "1686960",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "480",
                    "width": "480",
                    "size": "5910810",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "480",
                    "width": "480",
                    "size": "4480338",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-downsized-medium.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
                },
                "downsized_small": {
                    "height": "258",
                    "width": "258",
                    "mp4_size": "187305",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "288",
                    "width": "288",
                    "size": "30860",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "945056",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "307158",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "601254",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "90928",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "68502",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "305604",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "90726",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "153510",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "4810",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "200",
                    "size": "14029",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "945056",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "307158",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "495872",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "90928",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "68502",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "305604",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "90726",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "153510",
                    "webp": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "4810",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "200",
                    "width": "200",
                    "size": "14029",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "9577529",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "480",
                    "width": "480",
                    "size": "69250",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "480",
                    "width": "480",
                    "mp4_size": "1365991",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "86",
                    "width": "86",
                    "mp4_size": "49404",
                    "mp4": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "100",
                    "width": "100",
                    "size": "42905",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "100",
                    "width": "100",
                    "size": "37384",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "480",
                    "width": "480",
                    "size": "5910810",
                    "url": "https://media3.giphy.com/media/PnPU9GhN3V7oVizSHG/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVBuUFU5R2hOM1Y3b1ZpelNIRyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVBuUFU5R2hOM1Y3b1ZpelNIRyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVBuUFU5R2hOM1Y3b1ZpelNIRyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVBuUFU5R2hOM1Y3b1ZpelNIRyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "XcAskcEyoyld03drLt",
            "url": "https://giphy.com/gifs/fcbarcelona-XcAskcEyoyld03drLt",
            "slug": "fcbarcelona-XcAskcEyoyld03drLt",
            "bitly_gif_url": "https://gph.is/g/aRgm9JO",
            "bitly_url": "https://gph.is/g/aRgm9JO",
            "embed_url": "https://giphy.com/embed/XcAskcEyoyld03drLt",
            "username": "fcbarcelona",
            "source": "http://www.fcbarcelona.com",
            "title": "La Liga Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.fcbarcelona.com",
            "source_post_url": "http://www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2019-10-29 21:39:44",
            "trending_datetime": "2019-11-12 19:30:09",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "7435835",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "2389944",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "3919188",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "80",
                    "hash": "486c49c7bf50ce68e6b96c731520d84b"
                },
                "downsized": {
                    "height": "256",
                    "width": "256",
                    "size": "1784819",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "480",
                    "width": "480",
                    "size": "7435835",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "384",
                    "width": "384",
                    "size": "3829079",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-downsized-medium.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
                },
                "downsized_small": {
                    "height": "258",
                    "width": "258",
                    "mp4_size": "176926",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "256",
                    "width": "256",
                    "size": "17408",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "1289010",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "531760",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "818044",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "89361",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "68954",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "404849",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "169296",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "216978",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "3917",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "200",
                    "size": "11428",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "1289010",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "531760",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "653822",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "89361",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "68954",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "404849",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "169296",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "216978",
                    "webp": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "3917",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "200",
                    "width": "200",
                    "size": "11428",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "12009373",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "480",
                    "width": "480",
                    "size": "47703",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "480",
                    "width": "480",
                    "mp4_size": "2389944",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "64",
                    "width": "64",
                    "mp4_size": "42014",
                    "mp4": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "100",
                    "width": "100",
                    "size": "42060",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "100",
                    "width": "100",
                    "size": "37832",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "480",
                    "width": "480",
                    "size": "7435835",
                    "url": "https://media2.giphy.com/media/XcAskcEyoyld03drLt/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVhjQXNrY0V5b3lsZDAzZHJMdCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVhjQXNrY0V5b3lsZDAzZHJMdCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVhjQXNrY0V5b3lsZDAzZHJMdCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVhjQXNrY0V5b3lsZDAzZHJMdCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "sN5jvzgdzrmCY",
            "url": "https://giphy.com/gifs/fcbarcelona-fcbgif-campnou-sN5jvzgdzrmCY",
            "slug": "fcbarcelona-fcbgif-campnou-sN5jvzgdzrmCY",
            "bitly_gif_url": "http://gph.is/2jikJRd",
            "bitly_url": "http://gph.is/2jikJRd",
            "embed_url": "https://giphy.com/embed/sN5jvzgdzrmCY",
            "username": "fcbarcelona",
            "source": "http://www.youtube.com/watch?v=W0yKHVTbXIQ",
            "title": "fcbgif GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.youtube.com",
            "source_post_url": "http://www.youtube.com/watch?v=W0yKHVTbXIQ",
            "is_sticker": 0,
            "import_datetime": "2017-01-14 11:43:30",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "346779",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "550190",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "38",
                    "hash": "3513353141a6d5aa1bd812baa1d60f63"
                },
                "downsized": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_large": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "226",
                    "width": "401",
                    "mp4_size": "186230",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "356",
                    "size": "712076",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "180826",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "363336",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "356",
                    "size": "108759",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "78532",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "176",
                    "size": "256092",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "58480",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "112338",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "176",
                    "size": "6798",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "356",
                    "size": "18315",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "112",
                    "width": "200",
                    "size": "308264",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "69661",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "133048",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "112",
                    "width": "200",
                    "size": "45957",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "32348",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "58",
                    "width": "100",
                    "size": "110590",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "27575",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "52236",
                    "webp": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "58",
                    "width": "100",
                    "size": "3545",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "112",
                    "width": "200",
                    "size": "8328",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "2071578",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "270",
                    "width": "480",
                    "size": "28320",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "270",
                    "width": "480",
                    "mp4_size": "346779",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "86",
                    "width": "150",
                    "mp4_size": "33531",
                    "mp4": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "58",
                    "width": "100",
                    "size": "28360",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "58",
                    "width": "100",
                    "size": "39080",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "270",
                    "width": "480",
                    "size": "1425389",
                    "url": "https://media3.giphy.com/media/sN5jvzgdzrmCY/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXNONWp2emdkenJtQ1kmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXNONWp2emdkenJtQ1kmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXNONWp2emdkenJtQ1kmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXNONWp2emdkenJtQ1kmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "xT1XGx3mIWL2J6PMWc",
            "url": "https://giphy.com/gifs/fcbarcelona-fc-barcelona-ftbol-xT1XGx3mIWL2J6PMWc",
            "slug": "fcbarcelona-fc-barcelona-ftbol-xT1XGx3mIWL2J6PMWc",
            "bitly_gif_url": "http://gph.is/1NGtN7E",
            "bitly_url": "http://gph.is/1NGtN7E",
            "embed_url": "https://giphy.com/embed/xT1XGx3mIWL2J6PMWc",
            "username": "fcbarcelona",
            "source": "http://www.fcbarcelona.com",
            "title": "Champions League Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.fcbarcelona.com",
            "source_post_url": "http://www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2016-04-23 01:56:27",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "270",
                    "width": "480",
                    "size": "3066093",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "886848",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "1248598",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "47",
                    "hash": "0ba67f562a539fbe463f166748e961de"
                },
                "downsized": {
                    "height": "216",
                    "width": "384",
                    "size": "1741640",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "270",
                    "width": "480",
                    "size": "3066093",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "270",
                    "width": "480",
                    "size": "3066093",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "162",
                    "width": "286",
                    "mp4_size": "190056",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "216",
                    "width": "384",
                    "size": "32163",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "356",
                    "size": "1616235",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "565647",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "875650",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "356",
                    "size": "192711",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "132556",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "176",
                    "size": "568753",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "194694",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "257020",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "176",
                    "size": "8662",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "356",
                    "size": "24106",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "112",
                    "width": "200",
                    "size": "694038",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "225536",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "306586",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "112",
                    "width": "200",
                    "size": "82445",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "51166",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "58",
                    "width": "100",
                    "size": "209299",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "92678",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "114698",
                    "webp": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "58",
                    "width": "100",
                    "size": "4075",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "112",
                    "width": "200",
                    "size": "11012",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "3517095",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "270",
                    "width": "480",
                    "size": "36076",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "270",
                    "width": "480",
                    "mp4_size": "886848",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "60",
                    "width": "104",
                    "mp4_size": "44718",
                    "mp4": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "58",
                    "width": "100",
                    "size": "36842",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "58",
                    "width": "100",
                    "size": "35550",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "270",
                    "width": "480",
                    "size": "3066093",
                    "url": "https://media0.giphy.com/media/xT1XGx3mIWL2J6PMWc/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXhUMVhHeDNtSVdMMko2UE1XYyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXhUMVhHeDNtSVdMMko2UE1XYyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXhUMVhHeDNtSVdMMko2UE1XYyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPXhUMVhHeDNtSVdMMko2UE1XYyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "h2NxCschQ81ltiL9HV",
            "url": "https://giphy.com/gifs/fcbarcelona-goat-messi-leo-h2NxCschQ81ltiL9HV",
            "slug": "fcbarcelona-goat-messi-leo-h2NxCschQ81ltiL9HV",
            "bitly_gif_url": "https://gph.is/g/4A6Xl6e",
            "bitly_url": "https://gph.is/g/4A6Xl6e",
            "embed_url": "https://giphy.com/embed/h2NxCschQ81ltiL9HV",
            "username": "fcbarcelona",
            "source": "www.fcbarcelona.com",
            "title": "Lionel Messi Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2020-06-23 17:44:09",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "10813302",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "1918258",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "3759058",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "103",
                    "hash": "9525e2b5472cbcd41b877d97c1bfb86b"
                },
                "downsized": {
                    "height": "238",
                    "width": "238",
                    "size": "1805667",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "480",
                    "width": "480",
                    "size": "7896450",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-downsized-large.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-large.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "342",
                    "width": "342",
                    "size": "4423747",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-downsized-medium.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g"
                },
                "downsized_small": {
                    "height": "400",
                    "width": "400",
                    "mp4_size": "175673",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "238",
                    "width": "238",
                    "size": "26650",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "1921652",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "401727",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "954200",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "107687",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "70962",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "618600",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "152213",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "292414",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "6455",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "200",
                    "size": "18184",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "1921652",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "401727",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "773148",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "107687",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "70962",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "618600",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "152213",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "292414",
                    "webp": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "6455",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "200",
                    "width": "200",
                    "size": "18184",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "7730970",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "480",
                    "width": "480",
                    "size": "74437",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "480",
                    "width": "480",
                    "mp4_size": "1918258",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "80",
                    "width": "80",
                    "mp4_size": "44085",
                    "mp4": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "80",
                    "width": "80",
                    "size": "40967",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "100",
                    "width": "100",
                    "size": "42902",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "480",
                    "width": "480",
                    "size": "10813302",
                    "url": "https://media0.giphy.com/media/h2NxCschQ81ltiL9HV/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWgyTnhDc2NoUTgxbHRpTDlIViZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWgyTnhDc2NoUTgxbHRpTDlIViZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWgyTnhDc2NoUTgxbHRpTDlIViZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWgyTnhDc2NoUTgxbHRpTDlIViZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "gZQ7NsdTXM86ZLPpdN",
            "url": "https://giphy.com/gifs/uefa-sports-sport-ucl-gZQ7NsdTXM86ZLPpdN",
            "slug": "uefa-sports-sport-ucl-gZQ7NsdTXM86ZLPpdN",
            "bitly_gif_url": "https://gph.is/g/ZOyBp9d",
            "bitly_url": "https://gph.is/g/ZOyBp9d",
            "embed_url": "https://giphy.com/embed/gZQ7NsdTXM86ZLPpdN",
            "username": "uefa",
            "source": "",
            "title": "Champions League Football GIF by UEFA",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2022-09-08 22:16:54",
            "trending_datetime": "2023-09-26 19:40:08",
            "images": {
                "original": {
                    "height": "298",
                    "width": "480",
                    "size": "3765440",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "450728",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "1241620",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "105",
                    "hash": "a4ec16c0e3fb3c5de8337cf808bd086a"
                },
                "downsized": {
                    "height": "238",
                    "width": "384",
                    "size": "1363265",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "298",
                    "width": "480",
                    "size": "3765440",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "298",
                    "width": "480",
                    "size": "3765440",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "248",
                    "width": "399",
                    "mp4_size": "194114",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "238",
                    "width": "384",
                    "size": "16974",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "322",
                    "size": "1486887",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "322843",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "703720",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "322",
                    "size": "79985",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "50914",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "162",
                    "size": "510129",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "103408",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "211630",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "162",
                    "size": "4587",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "322",
                    "size": "11561",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "124",
                    "width": "200",
                    "size": "688786",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "140345",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "278708",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "124",
                    "width": "200",
                    "size": "37277",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "24136",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "64",
                    "width": "100",
                    "size": "250804",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "53625",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "105772",
                    "webp": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "64",
                    "width": "100",
                    "size": "2692",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "124",
                    "width": "200",
                    "size": "5931",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "2784527",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "298",
                    "width": "480",
                    "size": "21547",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "298",
                    "width": "480",
                    "mp4_size": "450728",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "74",
                    "width": "116",
                    "mp4_size": "39517",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "64",
                    "width": "100",
                    "size": "21833",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "64",
                    "width": "100",
                    "size": "13896",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "hd": {
                    "height": "454",
                    "width": "732",
                    "mp4_size": "1306416",
                    "mp4": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/giphy-hd.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-hd.mp4&ct=g"
                },
                "480w_still": {
                    "height": "298",
                    "width": "480",
                    "size": "3765440",
                    "url": "https://media2.giphy.com/media/gZQ7NsdTXM86ZLPpdN/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/uefa/CtlONIU0BbPt.png",
                "banner_image": "https://media1.giphy.com/headers/uefa/IdHUPkD73XM1.gif",
                "banner_url": "https://media1.giphy.com/headers/uefa/IdHUPkD73XM1.gif",
                "profile_url": "https://giphy.com/uefa/",
                "username": "uefa",
                "display_name": "UEFA",
                "description": "The official home of the UEFA competitions on GIPHY",
                "instagram_url": "https://instagram.com/uefachampionsleague",
                "website_url": "http://www.uefa.com",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWdaUTdOc2RUWE04NlpMUHBkTiZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWdaUTdOc2RUWE04NlpMUHBkTiZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWdaUTdOc2RUWE04NlpMUHBkTiZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPWdaUTdOc2RUWE04NlpMUHBkTiZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "3o6ozrk8O4UmyUjoXK",
            "url": "https://giphy.com/gifs/fcbarcelona-fc-barcelona-ftbol-3o6ozrk8O4UmyUjoXK",
            "slug": "fcbarcelona-fc-barcelona-ftbol-3o6ozrk8O4UmyUjoXK",
            "bitly_gif_url": "http://gph.is/1MOcaId",
            "bitly_url": "http://gph.is/1MOcaId",
            "embed_url": "https://giphy.com/embed/3o6ozrk8O4UmyUjoXK",
            "username": "fcbarcelona",
            "source": "http://www.fcbarcelona.com",
            "title": "Camp Nou Football GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "www.fcbarcelona.com",
            "source_post_url": "http://www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2016-04-23 00:38:09",
            "trending_datetime": "2023-05-14 21:49:35",
            "images": {
                "original": {
                    "height": "267",
                    "width": "474",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "393776",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "502974",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "26",
                    "hash": "ec9e797cd3a210bb61eddb148c700038"
                },
                "downsized": {
                    "height": "267",
                    "width": "474",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_large": {
                    "height": "267",
                    "width": "474",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "267",
                    "width": "474",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "144",
                    "width": "255",
                    "mp4_size": "184293",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "267",
                    "width": "474",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "356",
                    "size": "716214",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "300440",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "366228",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "356",
                    "size": "148758",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "100532",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "178",
                    "size": "265783",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "99856",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "109634",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "178",
                    "size": "8894",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "356",
                    "size": "23444",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "112",
                    "width": "200",
                    "size": "330115",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "104728",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "129162",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "112",
                    "width": "200",
                    "size": "68830",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "40024",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "58",
                    "width": "100",
                    "size": "95230",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "41951",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "48072",
                    "webp": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "58",
                    "width": "100",
                    "size": "3932",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "112",
                    "width": "200",
                    "size": "10996",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "2906947",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "267",
                    "width": "474",
                    "size": "33124",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "266",
                    "width": "474",
                    "mp4_size": "393776",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "68",
                    "width": "118",
                    "mp4_size": "43937",
                    "mp4": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "58",
                    "width": "100",
                    "size": "32517",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "58",
                    "width": "100",
                    "size": "48072",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "480w_still": {
                    "height": "270",
                    "width": "480",
                    "size": "1251348",
                    "url": "https://media1.giphy.com/media/3o6ozrk8O4UmyUjoXK/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNm96cms4TzRVbXlVam9YSyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNm96cms4TzRVbXlVam9YSyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNm96cms4TzRVbXlVam9YSyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNm96cms4TzRVbXlVam9YSyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "YoW1jRACETz6isLOzC",
            "url": "https://giphy.com/gifs/fcbarcelona-barcelona-fcbgif-bara-YoW1jRACETz6isLOzC",
            "slug": "fcbarcelona-barcelona-fcbgif-bara-YoW1jRACETz6isLOzC",
            "bitly_gif_url": "https://gph.is/g/Z8ezbNz",
            "bitly_url": "https://gph.is/g/Z8ezbNz",
            "embed_url": "https://giphy.com/embed/YoW1jRACETz6isLOzC",
            "username": "fcbarcelona",
            "source": "www.fcbarcelona.com",
            "title": "Lionel Messi Sport GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "www.fcbarcelona.com",
            "is_sticker": 0,
            "import_datetime": "2020-02-06 14:09:34",
            "trending_datetime": "2020-02-18 19:54:45",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "2659780",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "404716",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "985078",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "39",
                    "hash": "64a6c46f78d04f617b3752499e83379f"
                },
                "downsized": {
                    "height": "480",
                    "width": "480",
                    "size": "1930818",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "480",
                    "width": "480",
                    "size": "2659780",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "480",
                    "width": "480",
                    "size": "2659780",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "320",
                    "width": "320",
                    "mp4_size": "197890",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "480",
                    "width": "480",
                    "size": "56551",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "498340",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "124881",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "309466",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "78710",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "55176",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "162215",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "45654",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "79724",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "4437",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "200",
                    "size": "11887",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "498340",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "124881",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "247860",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "78710",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "55176",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "162215",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "45654",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "79724",
                    "webp": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "100",
                    "width": "100",
                    "size": "4437",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "200",
                    "width": "200",
                    "size": "11887",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "4276562",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "480",
                    "width": "480",
                    "size": "46912",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "480",
                    "width": "480",
                    "mp4_size": "404716",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "108",
                    "width": "108",
                    "mp4_size": "40991",
                    "mp4": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "100",
                    "width": "100",
                    "size": "34650",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "100",
                    "width": "100",
                    "size": "21260",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "480",
                    "width": "480",
                    "size": "2659780",
                    "url": "https://media1.giphy.com/media/YoW1jRACETz6isLOzC/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVlvVzFqUkFDRVR6NmlzTE96QyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVlvVzFqUkFDRVR6NmlzTE96QyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVlvVzFqUkFDRVR6NmlzTE96QyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPVlvVzFqUkFDRVR6NmlzTE96QyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        },
        {
            "type": "gif",
            "id": "3o6Zt5O8sQztIC6h1e",
            "url": "https://giphy.com/gifs/fcbarcelona-funny-arda-turan-3o6Zt5O8sQztIC6h1e",
            "slug": "fcbarcelona-funny-arda-turan-3o6Zt5O8sQztIC6h1e",
            "bitly_gif_url": "http://gph.is/2fHP3iG",
            "bitly_url": "http://gph.is/2fHP3iG",
            "embed_url": "https://giphy.com/embed/3o6Zt5O8sQztIC6h1e",
            "username": "fcbarcelona",
            "source": "",
            "title": "Arda Turan Barca GIF by FC Barcelona",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2016-11-11 12:08:44",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "375",
                    "width": "500",
                    "size": "3473726",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                    "mp4_size": "766176",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                    "webp_size": "1589190",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                    "frames": "51",
                    "hash": "a85763b7d69605c0ec4ede7237952588"
                },
                "downsized": {
                    "height": "268",
                    "width": "360",
                    "size": "1749511",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-downsized.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g"
                },
                "downsized_large": {
                    "height": "375",
                    "width": "500",
                    "size": "3473726",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_medium": {
                    "height": "375",
                    "width": "500",
                    "size": "3473726",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                },
                "downsized_small": {
                    "height": "300",
                    "width": "400",
                    "mp4_size": "170198",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-downsized-small.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
                },
                "downsized_still": {
                    "height": "268",
                    "width": "360",
                    "size": "39523",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-downsized_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "268",
                    "size": "1135355",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.gif&ct=g",
                    "mp4_size": "321063",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.mp4&ct=g",
                    "webp_size": "693700",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200.webp&ct=g"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "268",
                    "size": "129431",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                    "webp_size": "96282",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_d.webp&ct=g"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "132",
                    "size": "403075",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.gif&ct=g",
                    "mp4_size": "98700",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.mp4&ct=g",
                    "webp_size": "201304",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100.webp&ct=g"
                },
                "fixed_height_small_still": {
                    "height": "100",
                    "width": "132",
                    "size": "8013",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100_s.gif&ct=g"
                },
                "fixed_height_still": {
                    "height": "200",
                    "width": "268",
                    "size": "21423",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200_s.gif&ct=g"
                },
                "fixed_width": {
                    "height": "150",
                    "width": "200",
                    "size": "712464",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.gif&ct=g",
                    "mp4_size": "226871",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                    "webp_size": "374772",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w.webp&ct=g"
                },
                "fixed_width_downsampled": {
                    "height": "150",
                    "width": "200",
                    "size": "80948",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w_d.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                    "webp_size": "59910",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w_d.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
                },
                "fixed_width_small": {
                    "height": "76",
                    "width": "100",
                    "size": "242395",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100w.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.gif&ct=g",
                    "mp4_size": "73971",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100w.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                    "webp_size": "134660",
                    "webp": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100w.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w.webp&ct=g"
                },
                "fixed_width_small_still": {
                    "height": "76",
                    "width": "100",
                    "size": "5317",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/100w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
                },
                "fixed_width_still": {
                    "height": "150",
                    "width": "200",
                    "size": "13759",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/200w_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
                },
                "looping": {
                    "mp4_size": "3891372",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-loop.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
                },
                "original_still": {
                    "height": "375",
                    "width": "500",
                    "size": "50829",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy_s.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
                },
                "original_mp4": {
                    "height": "360",
                    "width": "481",
                    "mp4_size": "766176",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
                },
                "preview": {
                    "height": "78",
                    "width": "103",
                    "mp4_size": "44426",
                    "mp4": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-preview.mp4?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
                },
                "preview_gif": {
                    "height": "76",
                    "width": "100",
                    "size": "44790",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-preview.gif?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
                },
                "preview_webp": {
                    "height": "76",
                    "width": "100",
                    "size": "39686",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/giphy-preview.webp?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
                },
                "480w_still": {
                    "height": "360",
                    "width": "480",
                    "size": "3473726",
                    "url": "https://media2.giphy.com/media/3o6Zt5O8sQztIC6h1e/480w_s.jpg?cid=1e3fbbca8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
                }
            },
            "user": {
                "avatar_url": "https://media1.giphy.com/avatars/fcbarcelona/LClnB2ClqUkn.jpg",
                "banner_image": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "banner_url": "https://media1.giphy.com/headers/fcbarcelona/fpd30ezKyeZF.jpg",
                "profile_url": "https://giphy.com/fcbarcelona/",
                "username": "fcbarcelona",
                "display_name": "FC Barcelona",
                "description": "Welcome to the Official FC Barcelona Giphy Channel #FCBGIF",
                "instagram_url": "https://instagram.com/fcbarcelona",
                "website_url": "http://www.fcbarcelona.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNlp0NU84c1F6dElDNmgxZSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNlp0NU84c1F6dElDNmgxZSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNlp0NU84c1F6dElDNmgxZSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZTNmYmJjYThoczZuYjdsZ2dud3pjeG1lMW1lNTZhZDd3eDQwb3VkamU1cTM3eWkmZ2lmX2lkPTNvNlp0NU84c1F6dElDNmgxZSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": ""
        }
    ],
    "meta": {
        "status": 200,
        "msg": "OK",
        "response_id": "8hs6nb7lggnwzcxme1me56ad7wx40oudje5q37yi"
    },
    "pagination": {
        "total_count": 500,
        "count": 10,
        "offset": 0
    }
}
