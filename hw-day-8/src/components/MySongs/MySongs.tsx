import { Card, Container} from "react-bootstrap"
import {useState, useEffect} from "react"

interface FunctionalComponentProps {
  title: string;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
}

const MySongs = ({title}:FunctionalComponentProps)=>{
  const [data, setData] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );
      let {data} = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);


    return(
      <Container>
           {data && data.map(singleData =>{
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{singleData.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
})
}
 </Container>

    )
  }

export default MySongs 

