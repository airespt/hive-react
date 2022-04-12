import { useEffect, useState } from 'react'
import { Post } from './Post'

const { Client } = require("@hiveio/dhive");
const client = new Client('https://api.hive.blog');

function HiveDemo() {
  let [data, setData] = useState([]) 

  useEffect(() => {
    const query = {
      tag: 'gamemapmaker',
      limit: 5,
    };
    client.database
      .getDiscussions('blog', query)
      .then(result => {
        setData(result)
      })
      .catch(err => {
        alert('Error occured' + err);
      });
  });

  return data.map(x => <Post post={x}/>)
}


export { HiveDemo };