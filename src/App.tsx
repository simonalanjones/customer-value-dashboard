import { useState } from 'react';
import { Member } from './interfaces';
import SearchBox from './components/searchBox';
import CardLayout from './components/cardLayout';
import Header from './components/header';
import AlertBox from './components/alertBox';
import DisclosureMessage from './components/disclosureMessage';

function App() {
  const fetchMember = () => {
    setMember({
      lengthOfMembership: '17 years',
      premiumIncome: 5509.55,
      claimsPaid: 1275.63,
      lastClaimDate: '27 Nov 19',
      memberRating: 'L',
      enrolmentDate: '11 May 17',
    });
  };
  const [member, setMember] = useState<Member | null>(null);
  const onSubmit = (text: string): void => {
    console.log('callback in App', text);
    fetchMember();
  };

  return (
    <div className="container mx-auto lg:w-4/5">
      <Header />
      <SearchBox callback={onSubmit} />
      {member && (
        <>
          <AlertBox
            icon={true}
            text="Information shown is for internal use only; do not discuss the customer's value rating with them."
          />
          <CardLayout
            lengthOfMembership={member.lengthOfMembership}
            premiumIncome={member.premiumIncome}
            claimsPaid={member.claimsPaid}
            lastClaimDate={member.lastClaimDate}
            memberRating={member.memberRating}
            enrolmentDate={member.enrolmentDate}
          />
          <DisclosureMessage />
        </>
      )}
    </div>
  );
}

export default App;
