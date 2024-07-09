import React from "react";


function MenuOption(props)  {
    return (
        <div class=" p-4 w-36 bg-white border-2 rounded-3xl shadow-md my-6 ml-2">
            <img class="w-32 " src={props.local} alt="">
            </img>
                    <div class="p-4">
                        <h3 class="font-bold">{props.nome}</h3>
                        <h5>{props.preco}</h5>
                    </div>
         </div>
    );
}

export default MenuOption;