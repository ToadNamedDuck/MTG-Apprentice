import { CardBasicInfo } from "../card-displays/card-basic-info"
import "./home.css"

export function Home({ loggedInFavorites, setLoggedInFavorites }) {
    const avacyn = {
        "name": "Archangel Avacyn // Avacyn, the Purifier",
        "manaCost": "{3}{W}{W}",
        "cmc": 5.0,
        "colors": [
            "W"
        ],
        "colorIdentity": [
            "R",
            "W"
        ],
        "type": "Legendary Creature — Angel",
        "supertypes": [
            "Legendary"
        ],
        "types": [
            "Creature"
        ],
        "subtypes": [
            "Angel"
        ],
        "rarity": "Mythic",
        "set": "SOI",
        "setName": "Shadows over Innistrad",
        "text": "Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        "artist": "James Ryman",
        "number": "5",
        "power": "4",
        "toughness": "4",
        "layout": "transform",
        "multiverseid": "409741",
        "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card",
        "rulings": [
            {
                "date": "2016-04-08",
                "text": "Archangel Avacyn’s delayed triggered ability triggers at the beginning of the next upkeep regardless of whose turn it is."
            },
            {
                "date": "2016-04-08",
                "text": "Archangel Avacyn’s delayed triggered ability won’t cause it to transform back into Archangel Avacyn if it has already transformed into Avacyn, the Purifier, perhaps because several creatures died in one turn."
            },
            {
                "date": "2016-07-13",
                "text": "For more information on double-faced cards, see the Shadows over Innistrad mechanics article (http://magic.wizards.com/en/articles/archive/feature/shadows-over-innistrad-mechanics)."
            }
        ],
        "printings": [
            "PSOI",
            "SOI",
            "V17"
        ],
        "originalText": "Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        "originalType": "Legendary Creature — Angel",
        "legalities": [
            {
                "format": "Commander",
                "legality": "Legal"
            },
            {
                "format": "Duel",
                "legality": "Legal"
            },
            {
                "format": "Legacy",
                "legality": "Legal"
            },
            {
                "format": "Modern",
                "legality": "Legal"
            },
            {
                "format": "Pioneer",
                "legality": "Legal"
            },
            {
                "format": "Vintage",
                "legality": "Legal"
            }
        ],
        "id": "ad53597a-4448-5cbd-82bf-11d163b0c14f"
    }
    return <div id="home">
        <h1 id="homeHeader">Magic: The Gathering™ - Apprentice</h1>
        <div id="homeContent">
            <div id="infoBlurb">
                <p>
                    Welcome to Magic: The Gathering™ - Apprentice. Here you will be able to search for cards from a foreign API, and add then to
                    your favorite's list, so that you can show them off, or keep record of them.
                </p>
                <p>
                To get started, enter the name of a card you would like to view in the search bar.
                There are a lot of cards out there, so it might also be fun to use the random cards page, which be accessed with the "Random Cards"
                link in the navbar.
                </p>
                <p>
                    From there, or from search results, you can click the "Favorite Card" button on any card you see to add a card to your
                    favorites list. There are always reprints of cards from you past, but you can add every variant of a single card should you be so
                    inclined. To remove a favorite, simply visit your profile, and remove the card while viewing your favorites list.
                </p>
                <p>
                    To view more detailed information about a card you come across, simply click it's image (even the ones that say the card doesn't have an image),
                    and you will be taken to a page detailing the useful information to know about the card, as well as the card's text. There you will find
                    other information as well, such as rulings, the name of the card's artist.
                </p>
                <h2 id="goAndExplore">Go and explore, Apprentice!</h2>
            </div>
            <div id="CardOfTheDay">
                <h3>Card of the Day</h3>
                <CardBasicInfo cardObject={avacyn} loggedInFavorites={loggedInFavorites} setLoggedInFavorites={setLoggedInFavorites} />
            </div>
        </div>
    </div>
}