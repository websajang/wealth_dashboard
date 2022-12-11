import {useState, useEffect} from 'react';

export default function Form({setEntries, editEntry, setEditEntry, entries}){

    /** Edit entry **/
    useEffect(()=>{
        if(Object.keys(editEntry).length > 0){
            setCash(editEntry.cash);
            setFunds(editEntry.funds);
            setStocks(editEntry.stocks);
            setDebt(editEntry.debt);
            setMonth(editEntry.month);
            setYear(editEntry.year);
        }
    }, [editEntry])

    /** Parameters **/
    const [cash, setCash] = useState('');
    const [funds, setFunds] = useState('');
    const [stocks, setStocks] = useState('');
    const [debt, setDebt] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    /** Form verifications **/
    const [cashError, setCashError] = useState(false)
    const [fundsError, setFundsError] = useState(false)
    const [stocksError, setStocksError] = useState(false)
    const [debtError, setDebtError] = useState(false)
    const [monthError, setMonthError] = useState("")
    const [yearError, setYearError] = useState(false)

    const handleCashError = cash =>{
        if(cash.includes('1') || cash.includes('2') || cash.includes('3') || cash.includes('4') || cash.includes('5')
        || cash.includes('6') || cash.includes('7') || cash.includes('8') || cash.includes('9') || cash.includes('0')
        || cash == ''
        ){
            setCashError(false)
        }else{
            setCashError(true)
        }
    }

    const handleFundsError = funds =>{
        if(funds.includes('1') || funds.includes('2') || funds.includes('3') || funds.includes('4') || funds.includes('5')
        || funds.includes('6') || funds.includes('7') || funds.includes('8') || funds.includes('9') || funds.includes('0')
        || funds == ''
        ){
            setFundsError(false)
        }else{
            setFundsError(true)
        }
    }

    const handleStocksError = stocks =>{
        if(stocks.includes('1') || stocks.includes('2') || stocks.includes('3') || stocks.includes('4') || stocks.includes('5')
        || stocks.includes('6') || stocks.includes('7') || stocks.includes('8') || stocks.includes('9') || stocks.includes('0')
        || stocks == ''
        ){
            setStocksError(false)
        }else{
            setStocksError(true)
        }
    }

    const handleDebtError = debt =>{
        if(debt.includes('1') || debt.includes('2') || debt.includes('3') || debt.includes('4') || debt.includes('5')
        || debt.includes('6') || debt.includes('7') || debt.includes('8') || debt.includes('9') || debt.includes('0')
        || debt == ''
        ){
            setDebtError(false)
        }else{
            setDebtError(true)
        }
    }

    const handleMonthError = month =>{
        if(month.includes('January') || month.includes('February') || month.includes('March') || month.includes('April') || month.includes('May')
        || month.includes('June') || month.includes('July') || month.includes('August') || month.includes('September') || month.includes('October')
        || month.includes('November') || month.includes('December') || month == ''
        ){
            setMonthError(false)
        }else{
            setMonthError(true)
        }
    }

    const handleYearError = year =>{
        if(year.includes('1') || year.includes('2') || year.includes('3') || year.includes('4') || year.includes('5')
        || year.includes('6') || year.includes('7') || year.includes('8') || year.includes('9') || year.includes('0')
        || year == ''
        ){
            setYearError(false)
        }else{
            setYearError(true)
        }
    }

    /** Generate unique Id **/

    const generateId = () =>{
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36)

        return random + date
    }

    /** Handle Submit **/

    const handleSubmit = e =>{
        e.preventDefault();

        const total = Number(cash) + Number(funds) + Number(stocks);
        const totalDebt = (Number(debt)/ total)*100;
        const entry = ({
            cash,
            funds,
            stocks,
            debt,
            month,
            year,
            total,
            totalDebt,
        })

        /** Check if new entry or editing existing one **/
        if(editEntry.id){
            /** Edit Entry **/
            entry.id = editEntry.id
            const veryUpdatedEntries = entries.map( entryState => entryState.id === entry.id ? entry : entryState);
            window.localStorage.setItem('entries-storage', JSON.stringify(veryUpdatedEntries));
            setEntries(veryUpdatedEntries);
            setEditEntry({});
        }else{
            /** New entry **/

            if(window.localStorage.getItem('entries-storage')){
                entry.id = generateId();
                let storedObject = JSON.parse(window.localStorage.getItem('entries-storage'));
                window.localStorage.setItem('entries-storage', JSON.stringify([...storedObject, entry]));
                setEntries([...storedObject, entry]);
            } else{
                window.localStorage.setItem('entries-storage', JSON.stringify(entry));
                setEntries(entry);
        }
        }
        /** Reset form **/

        setCash('');
        setFunds('');
        setStocks('');
        setDebt('');
        setMonth('');
        setYear('');

        
        
    }

    return(
        <form onSubmit={handleSubmit} className="p-5 h-full bg-forth rounded-xl font-lato flex flex-col justify-around">
            <h1 className="font-bold text-3xl text-center">Wealth Form</h1>
            <div className="relative mt-10 text-xl">
                <input 
                    id="cash" 
                    name="cash" 
                    className={`${!cashError || cash === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Cash"
                    value={cash} 
                    onChange={e => {setCash(e.target.value); handleCashError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="cash">Cash</label>
                <label className={`${cashError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only numbers</label>
            </div>
            <div className="relative mt-10 text-xl">
                <input 
                    id="funds" 
                    name="funds" 
                    className={`${!fundsError || funds === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Funds"
                    value={funds} 
                    onChange={e => {setFunds(e.target.value); handleFundsError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="funds">Funds</label>
                <label className={`${fundsError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only numbers</label>
            </div>
            <div className="relative mt-10 text-xl">
                <input 
                    id="stocks" 
                    name="stocks" 
                    className={`${!stocksError || stocks === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Stocks"
                    value={stocks} 
                    onChange={e => {setStocks(e.target.value); handleStocksError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="stocks">Stocks</label>
                <label className={`${stocksError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only numbers</label>
            </div>
            <div className="relative mt-10 text-xl">
                <input 
                    id="debt" 
                    name="debt" 
                    className={`${!debtError || debt === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Debt"
                    value={debt} 
                    onChange={e => {setDebt(e.target.value); handleDebtError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="cash">Debt</label>
                <label className={`${debtError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only numbers</label>
            </div>
            <div className="relative mt-10 text-xl">
                <input 
                    id="month" 
                    name="month" 
                    className={`${!monthError || month === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Month"
                    value={month} 
                    onChange={e => {setMonth(e.target.value); handleMonthError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="year">Month</label>
                <label className={`${monthError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only 'January', 'February'...</label>
            </div>
            <div className="relative mt-10 text-xl">
                <input 
                    id="year" 
                    name="year" 
                    className={`${!yearError || year === '' ? 'border-primary focus:border-third' : 'border-red focus:border-red'} peer focus:outline-none h-10 w-full border-b-2 
                 bg-forth placeholder-primary/0`} 
                    type="text" 
                    placeholder="Year"
                    value={year} 
                    onChange={e => {setYear(e.target.value); handleYearError(e.target.value)}}/>

                <label className="absolute left-0 -top-6 text-secondary peer-placeholder-shown:top-2
                peer-placeholder-shown:text-secondary/50 peer-focus:-top-6 peer-focus:text-secondary
                transition-all" for="year">Year</label>
                <label className={`${yearError ? 'text-red text-sm z-10 absolute left-0 -bottom-6' : 'hidden'}`}>Only numbers</label>
            </div>
            
            <button type="submit" className="p-3 bg-third/75 hover:bg-third rounded-xl mt-10 text-xl">{editEntry.id ? 'Edit entry' : 'Submit'}</button>
        </form>
    )
}