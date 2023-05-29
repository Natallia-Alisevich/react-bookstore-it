import { useEffect, useState } from "react";
import { Tab, TabList, Tabs, TabPanel } from "./styles";
import { BookInfo } from "types";
import { useParams } from "react-router-dom";

export const TabBooks = () => {
    const [detailsBook, setDetailsBook] = useState<BookInfo>();

    const { isbn13 } = useParams();
    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
            .then((response) => response.json())
            .then((response) => setDetailsBook(response));
    }, []);
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Authors</Tab>
                <Tab>Publisher - year</Tab>
            </TabList>
            <TabPanel>{detailsBook?.desc}</TabPanel>
            <TabPanel>{detailsBook?.authors}</TabPanel>
            <TabPanel>{detailsBook?.publisher} - {detailsBook?.year}</TabPanel>
        </Tabs>
    );
};

