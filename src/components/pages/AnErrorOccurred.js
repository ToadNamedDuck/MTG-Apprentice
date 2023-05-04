import { useNavigate } from "react-router-dom"
import "./error.css"
export function AnErrorOccurred({onCardSearch, onRandomSearch, onDetails}){
    const navigate = useNavigate()

    return <div id="errorOccurred">
        <h2 className="ErrorH">There was an error with that request.</h2>
        {
            onCardSearch ?
            <>
                <h3 className="ErrorH">If you were looking for specific cards using the search bar, clear the search bar and try again soon.</h3>
                <a id="takeMeBack--a" href="/">Take me Home</a>
            </>
            :
            ""
        }
        {
            onRandomSearch ?
            <h3 className="ErrorH">If you were browsing the Random Cards page, click the button below.</h3>
            :
            ""
        }
        {
            onDetails ?
            <>
                <h3 className="ErrorH">Try to view this card's details again momentarily.</h3>
                <button onClick={() => {navigate(-1)} }>Take me Back</button>
            </>
            :
            ""
        }
    </div>
}