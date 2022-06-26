 
const gridStyle = {
  display: 'grid',
  height:  '100vh',
  gridTemplateAreas: `"side side reviews reviews rating rating sentiment sentiment"
                      "side side reviews reviews rating rating sentiment sentiment"
                      "side side visitors visitors visitors visitors visitors visitors"
                      "side side visitors visitors visitors visitors visitors visitors"
                      "side side visitors visitors visitors visitors visitors visitors"`,
  gap: '50px',
  backgroundColor: '#71698b',
  padding: '50px'
};

 // Header Component
const Header = () => {
    return <h1 > Commence Dashboard Creation!</h1>;
  };

const Sidebar = () => {
  return(
    <div style={Object.assign({},styles.sideStyle,styles.divStyle)}>
          <ul style={styles.listStyle}>
              <li>Dashboard</li>
              <li>Widget</li>
              <li>Reviews</li>
              <li>Customers</li>
              <li>Online Analysis</li>
              <li>Settings</li>
          </ul>
    </div> 
  )

}

const Reviews = () => {
  return(
    <div style={Object.assign({},styles.divStyle,styles.reviewStyle)}>
      <h4>Reviews</h4>
      <h2>1,281</h2>  
    </div> 
  )

}

const AverageRating = () => {
  return(
    <div style={Object.assign({},styles.divStyle,styles.ratingStyle)}>
      <h4>Average Rating</h4>
      <h2>4.6</h2>  
    </div> 
  )

}

const SentimentAnalysis = () => {
  return(
    <div style={Object.assign({},styles.divStyle,styles.sentimentStyle)}>
      <h4>Sentiment Analysis</h4>
      <ul style={styles.listStyle}>
              <li>960</li>
              <li>122</li>
              <li>321</li>
      </ul>
    </div> 
  )

}

const WebsiteVisitors = () => {
  return(
    <div style={Object.assign({},styles.divStyle,styles.visitorStyle)}>
      <h4>Website Visitors</h4>
      <h2>821</h2>   
      <div><img style={styles.imgStyle} src="https://i.ibb.co/RHzVLF0/visitorchart.jpg"/></div>
    </div> 
  )

}

const styles = {
    divOuter:{
      backgroundColor: '#988bc8',
      padding: "50px"
    },
    divStyle: {
      textAlign: "left",
      padding: "10px",
      fontSize: "30px",
    },
    listStyle: {
      listStyleType: "none",
      display: "grid",
      gap: "20px"
     },
   
    sideStyle:{
       gridArea: `side`,
       display:"flex",
       alignItems:"center"
    },
    reviewStyle:{
      gridArea: `reviews`,
      background:"black",
      color:"white"
     },
     ratingStyle:{
      gridArea: `rating`,
      background:"black",
      color:"white"
     },
     sentimentStyle:{
      gridArea: `sentiment`,
      background:"black",
      color:"white"
     },
     visitorStyle:{
      gridArea: `visitors`,
      background:"black",
      color:"white"
     },
     imgStyle:{
      display:"block",
      margin:"auto",
      maxHeight:"400px"
     }

}
 
  // App Component
  class App extends React.Component {
    render() {
      return (
        <div style={styles.divOuter}>
            <Header/>
        <div style = {gridStyle}>
           <Sidebar />
           <Reviews /> 
           <AverageRating /> 
           <SentimentAnalysis />      
           <WebsiteVisitors />
        </div>
        </div>
      );
    }
  }
  
 
  ReactDOM.render(<App />, document.querySelector('main') );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  