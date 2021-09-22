// import { Form, Button, FormControl, Container } from "react-bootstrap"
// import { Component } from 'react';
// import Cards from "../MySongs/MySongs"


// interface HomeComponentProps {
//     title?: string;
//     subTitle?: string;
//     count?: number;
// }
// interface HomeComponentState {
//     title: string;
//     artist?: string;
//     album?: string;
// }

// class Home extends Component<HomeComponentProps, HomeComponentState>{
//     state: HomeComponentState = { title: "shakira" }
//     songSearch = async (e:any) => {

//         e.preventDefault()

//         try {
//             const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.title}`)
//             const  data  = await response.json()
//             console.log(data)

//             console.log("data jobs", data);
//             if (response.ok) {
//                 this.setState({

//         songs: data

//                 })
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     render() {
//         return (
//             <Container >

//                 <Form inline  >
//                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                     <Button variant="outline-light">Search</Button>
//                 </Form>

//                 <Cards songs={this.state.songs}/>
//             </Container >
//         )
//     }
// }







// export default Home;
const Home =()=>{
    return( console.log("hello world"))
}
export default Home;