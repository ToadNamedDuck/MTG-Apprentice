import "./error.css"
export function AnErrorOccurred({onCardSearch, onRandomSearch}){
    return <div id="errorOccurred">
        <h2 className="ErrorH">There was an error with that request.</h2>
        {
            onCardSearch ?
            <h3 className="ErrorH">If you were looking for specific cards using the search bar, clear the Search Bar and try again soon.</h3>
            :
            ""
        }
        {
            onRandomSearch ?
            <h3 className="ErrorH">If you were browsing the Random Cards page, click the button below.</h3>
            :
            ""
        }
    </div>
}