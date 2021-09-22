import { Card} from "react-bootstrap"
import {useState, useEffect} from "react"

interface FuntionalCompontentProps {
  title: string;
}

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
}

const MySongs = ({title}:FunctionalComponentProps)=>{
  const [song, setSong] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );
      let songs = await response.json();
      setSong(songs);
      console.log(songs);
    };
    fetchData();
  }, []);


    return(
      
  
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>hello</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

    

    )
  }

export default MySongs 

