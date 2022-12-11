

export default function Dashboard({entries, setEntries, setEditEntry}) {

        /** Delete entry **/

        const deleteEntry = (id) => {
            const updatedEntries = entries.filter( element => element.id !== id);
            setEntries(updatedEntries);
            window.localStorage.setItem('entries-storage', JSON.stringify(updatedEntries));
            console.log(updatedEntries)
        }

        /** Update entry **/

        const updateEntry = (entry) =>{
            setEditEntry(entry)
        }

    return(
        <div className="flex flex-col-reverse">
            {entries.map((entry)=> (
                <div key={entry.id} className="bg-forth rounded-xl p-3 mb-3 font-lato w-full flex flex-col">
                    <div className="flex flex-row justify-between mb-3">
                        <div className="flex gap-2">
                            <p className="text-primary/50">{entry.month}</p>
                            <p className="text-primary/50">{entry.year}</p>
                        </div>
                        <div className="flex gap-5">
                            <button 
                                className="text-primary/50 hover:text-third"
                                onClick={()=>updateEntry(entry)}
                                >Edit</button>
                            <button 
                                className="text-primary/50 hover:text-red"
                                onClick={()=>deleteEntry(entry.id)}
                                >Delete</button>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                          <div className="flex flex-col w-1/2">
                            <p><span className="font-bold">Cash: </span>{entry.cash}€</p>
                            <p><span className="font-bold">Funds: </span>{entry.funds}€</p>
                            <p><span className="font-bold">Stocks: </span>{entry.stocks}€</p>
                          </div>
                          <div className="w-1/2">
                            <p><span className="font-bold">Debt: </span>{entry.debt}€</p>
                            <p><span className="font-bold">Total debt: </span>{(entry.totalDebt)?.toFixed(2)}%</p>
                            <p><span className="font-bold">Total: </span>{entry.total}€</p>
                          </div>
                    </div>
                </div>
            ))}
        </div>
    )
};