import "./UserBoxNameAjarn.css";
import Pop from './Pop';
import UserList from './get';

// const getuser = () => {
//     Axios.get("http://127.0.0.1:3001/add").then((response) => {
//         setuserList(response.data);
//     });
//   };

export default function UserBoxNameAjarn(props) { 
    return (
        <div>
            <div className="UserBoxNameAjarn-userbox">
                {props.children}
                
                <div className="UserBoxNameAjarn-buttonadd">
                        <Pop></Pop>

                    </div>
                <div>
                    <body className="UserBoxNameAjarn-NameAjarn">
                    <UserList></UserList>
                    </body>


                </div>



            </div>

        </div>

    );
}