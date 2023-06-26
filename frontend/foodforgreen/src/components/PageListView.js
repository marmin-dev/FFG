import React, { useRef, useEffect, useState } from "react";
import { styled } from "styled-components";
import ListItem from "./ListItem";
import { getPageListApi } from "../apiHandler/GetPageListApi";

const ListViewDiv = styled.div`
  background-color: white;
  margin: 0px;
  max-height: 400px;
  overflow-y: scroll;
  position: relative;
`;

const PageListView = () => {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let total = 0;

  useEffect(() => {
    fetchDataAndSetMaxPage();
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchListData();
    }
  }, [page]);

  const fetchDataAndSetMaxPage = async () => {
    const response = await getPageListApi(page);
    const parseResponse = JSON.parse(response.body);
    setData(parseResponse.data);
    let max = parseResponse.total;
    total = max;
  };

  const fetchListData = async () => {
    const response = await getPageListApi(page);
    const parseResponse = JSON.parse(response.body);
    setData((prevData) => [...prevData, ...parseResponse.data]);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      if (page < total && !loading) {
        setLoading(true);
        setPage(page + 1);
      } else {
        console.log("No more data to load.");
      }
    }
  };

  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <ListViewDiv ref={containerRef}>
      {data.map((post) => (
        <ListItem key={post.id} data={post} />
      ))}
      {loading && <div>No More Post</div>}
    </ListViewDiv>
  );
};

export default PageListView;
