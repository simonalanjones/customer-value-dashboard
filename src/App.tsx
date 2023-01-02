import { useState } from 'react';
import { Member } from './interfaces';
import SearchBox from './components/searchBox';
import CardLayout from './components/cardLayout';
import { ButtonActionIcon, MemberIcon } from './components/icons';

function App() {
  const fetchMember = (id: string) => {
    setMember({
      lengthOfMembership: '17 years',
      premiumIncome: 5509.55,
      claimsPaid: 1275.63,
      lastClaimDate: '27 Nov 19',
      memberRating: 'L',
      enrolmentDate: '11 May 17',
      id: id,
    });
  };

  const [member, setMember] = useState<Member | null>(null);
  const onSubmit = (text: string): void => {
    fetchMember(text);
  };

  return (
    <>
      {!member && (
        <>
          <div className="container mx-auto flex py-12 items-center flex-col">
            <img src="/axa-logo.png" alt="logo" width="150" className="mb-6" />
            <h1 className="text-6xl text-gray-700 font-bold mb-5 ">
              Customer Value Dashboard
            </h1>
            <p className="text-gray-500 text-2xl mb-4">
              For individual core plan member use only, this does not include
              partner business.
            </p>

            <SearchBox callback={onSubmit} />
            <p className="text-sm mx-auto text-center mt-2 w-2/5 text-gray-400 leading-relaxed font-inter">
              Any data shown is based on the member's last 10 years with us,
              however they could have been with us longer. If a member has
              previously been on a corporate/partner plan this won't be
              reflected in their rating and the enrolment date won't reflect
              this.
            </p>
          </div>
        </>
      )}

      {member && (
        <>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src="/axa-logo.png" alt="logo" width="50" />
              <span className="ml-3 text-xl">Customer Value Dashboard</span>
            </p>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a href="/" className="mr-5 hover:text-gray-900">
                Demo Link 1
              </a>
              <a href="/" className="mr-5 hover:text-gray-900">
                Demo Link 2
              </a>
            </nav>
          </div>

          <div className="container mx-auto lg:w-3/5 mt-16">
            <div className="flex">
              <div className="pt-2 pr-2">
                <MemberIcon />
              </div>

              <div>
                <h1 className="text-6xl text-gray-700 font-bold mb-5 uppercase">
                  {member.id}
                </h1>
              </div>
            </div>
            <p className="text-gray-500 text-2xl mb-4">
              Information shown is for internal use only; do not discuss the
              member's value rating with them.
            </p>

            <CardLayout
              lengthOfMembership={member.lengthOfMembership}
              premiumIncome={member.premiumIncome}
              claimsPaid={member.claimsPaid}
              lastClaimDate={member.lastClaimDate}
              memberRating={member.memberRating}
              enrolmentDate={member.enrolmentDate}
            />
            <p className="text-sm mx-auto text-center mt-8 text-gray-400 leading-relaxed font-inter">
              Data is based on the member's last 10 years with us, however they
              could have been with us longer.
              <br /> If a member has previously been on a corporate/partner plan
              this won't be reflected in their rating and the enrolment date
              won't reflect this.
            </p>
            <div className="text-center mt-8 ">
              <button
                onClick={() => setMember(null)}
                className="inline-flex items-center px-8  bg-indigo-500  text-white font-bold p-4 uppercase border-indigo-500  border-t border-b border-r text-md hover:bg-indigo-600"
              >
                Search again
                <ButtonActionIcon />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
