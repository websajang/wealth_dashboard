

export default function Databoard({entries}){

    return(
        <div className="bg-forth rounded-xl p-3 mb-3 font-lato w-full border-4">
            <h1 className="font-bold text-3xl text-center">Data</h1>
            <div className="lg:grid lg:grid-cols-2">
                <div className="mt-5">
                    <p><span className="font-bold">Highest Cash ever:</span> {Math.max(...entries.map(entry => entry.cash))}€</p>
                    <p><span className="font-bold">Highest Funds ever:</span> {Math.max(...entries.map(entry => entry.funds))}€</p>
                    <p><span className="font-bold">Highest Stocks ever:</span> {Math.max(...entries.map(entry => entry.stocks))}€</p>
                    <p><span className="font-bold">Highest Debt ever:</span> {Math.max(...entries.map(entry => entry.debt))}€</p>
                    <p><span className="font-bold">Highest % of debt ever:</span> {Math.max(...entries.map(entry => entry.totalDebt)).toFixed(2)}%</p>
                    <p><span className="font-bold">Highest Total ever:</span> {Math.max(...entries.map(entry => entry.total))}€</p>
                </div>
                <div className="mt-5">
                    <p><span className="font-bold">Lowest Cash ever</span> {Math.min(...entries.map(entry => entry.cash))}€</p>
                    <p><span className="font-bold">Lowest Funds ever:</span> {Math.min(...entries.map(entry => entry.funds))}€</p>
                    <p><span className="font-bold">Lowest Stocks ever:</span> {Math.min(...entries.map(entry => entry.stocks))}€</p>
                    <p><span className="font-bold">Lowest Debt ever:</span> {Math.min(...entries.map(entry => entry.debt))}€</p>
                    <p><span className="font-bold">Lowest % of debt ever:</span> {Math.min(...entries.map(entry => entry.totalDebt)).toFixed(2)}%</p>
                    <p><span className="font-bold">Lowest Total ever:</span> {Math.min(...entries.map(entry => entry.total))}€</p>
                </div>
            </div>
        </div>
    )
}