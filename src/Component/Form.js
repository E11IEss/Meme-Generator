import React, { useEffect, useState } from "react";

export default function Form() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: '',
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const { url } = allMemes[randomNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClick = () => 1


    return (
        <section>
            <div className="form">
                <textarea
                    className="form--input"
                    type="text"
                    placeholder="type something..."
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                >

                </textarea>

                <textarea
                    className="form--input"
                    type="text"
                    placeholder="type something..."
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                >

                </textarea>
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}