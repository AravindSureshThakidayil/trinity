import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function getLoan() {
  const { contract } = useContract(
    "0x73e59F2D84dD4aBb9a88FE829f91b889453B2763"
  );
  const { mutateAsync: addLoan, isLoading } = useContractWrite(
    contract,
    "addLoan"
  );

  const call = async () => {
    try {
      const data = await addLoan({
        args: [_loanNumber, _payee, _lender, _amount, _period, _customerId],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}