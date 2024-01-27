import { AccordionModals } from "../../components/molicules/AccordionModals"

interface UserProfileContainerProps {
  userName: string;
  occupation: string;
  goals: string;
  challenges: string;
  interaction: string;
}
export function UserProfileContainer({userName,occupation,goals,challenges,interaction}:UserProfileContainerProps) {
    return (
        <>
            <AccordionModals 
            header={
            <div className="flex flex-col items-start gap-2">
            <p className="p text-muted-foreground ">User profile</p>
            <h3 className={`h5 group-hover:underline`}>{userName}</h3>
            </div>
            }
            content={
              <div className="py-4">
                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <h4 className="h6">Name:</h4>
                    <p>{userName}</p>
                  </li>
                  <li>
                    <h4 className="h6">Occupation:</h4>
                    <p>{occupation}</p>
                  </li>
                  <li>
                    <h4 className="h6">Goals:</h4>
                    <p>{goals}</p>
                  </li>
                  <li>
                    <h4 className="h6">Challenges: </h4>
                    <p>{challenges}</p>
                  </li>
                  <li>
                    <h4 className="h6">Interaction with the platform:</h4>
                    <p>{interaction}</p>
                  </li>
                </ul>
              </div>
            } 
            />


        </>
    )
}

