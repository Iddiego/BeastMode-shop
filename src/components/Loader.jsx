import React, { useState, useEffect } from "react"

const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer); 

  }, []);

  return loading ? (
    <div className="loader" />
  ) : null;
};

export default Loader;
