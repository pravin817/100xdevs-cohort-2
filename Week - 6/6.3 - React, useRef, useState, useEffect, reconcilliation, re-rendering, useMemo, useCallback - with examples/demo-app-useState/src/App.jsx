// import { useEffect, useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   console.log("rerendering Occurs");

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 3000);
//   }, []);

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

// Use of useMemo

/*


        import { useEffect, useMemo, useState } from "react";

        function App() {
        const [exchange1Data, setExchange1Data] = useState({});
        const [exchange2Data, setExchange2Data] = useState({});
        const [bankData, setBankData] = useState({});

        useEffect(() => {
            // Some operation to get the data
            setExchange1Data({
            returns: 100,
            });
        }, []);

        useEffect(() => {
            // Some operation to get the data
            setExchange2Data({
            returns: 100,
            });
        }, []);

        useEffect(() => {
            // Some operation to get the data
            setTimeout(() => {
            setBankData({
                income: 100,
            });
            }, 2000);
        }, []);

        // This code is running again and angin

        //   console.log("Before :-) ");
        //   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
        //   console.log("After :-) ");

        //   We can memoized the above function

        // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

        const cryptoReturns = useMemo(() => {
            console.log("hi there before");
            return exchange1Data.returns + exchange2Data.returns;
            console.log("hi there after");
        }, [exchange1Data, exchange2Data]);

        const incomeTax = (cryptoReturns + bankData.income) * 0.3;

        return <div>hi there, your income tax returns are {incomeTax}</div>;
        }

        export default App;

*/

/*
        Note : use of useCallback ----> this is used the memoized the functions
*/

import { memo, useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 1000);
  }, []);

  // This code is running again and angin

  //   console.log("Before :-) ");
  //   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  //   console.log("After :-) ");

  //   We can memoized the above function

  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

  //   const calculateCryptoReturns = () => {
  //     console.log("The function called");
  //     return exchange1Data.returns + exchange2Data.returns;
  //   };

  //   The above function can be memiozed as follow

  // const calculateCryptoReturns = () => {
  //   return exchange1Data.returns + exchange2Data.returns;
  // };

  const calculateCryptoReturns = useCallback(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data]
  );

  const cryptoReturns = calculateCryptoReturns();

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      <CryptogainCalculators calculateCryptoReturns={cryptoReturns} />
    </div>
  );
}

const CryptogainCalculators = memo(function ({ calculateCryptoReturns }) {
  console.log("Rerender");
  return <div>The return is :{calculateCryptoReturns}</div>;
});
export default App;
