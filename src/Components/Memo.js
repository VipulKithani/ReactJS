import React from 'react'
function Memo({name}){
    console.log('Renering Memo Component')
    return(
        <div>
            {name}
        </div>
    );
}
export default React.memo(Memo)