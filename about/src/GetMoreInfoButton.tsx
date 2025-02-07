const GetMoreInfoButton = () => {
    const handleClick = () => {
      alert('Here is more information!');
    };
  
    return (
      <div>
        <button onClick={handleClick}>Get More Info</button>
      </div>
    );
  };
  
  export default GetMoreInfoButton;