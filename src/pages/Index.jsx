// Web Scraping App that generates an RSS feed based on given keywords
import { useState } from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaRss, FaSearch } from "react-icons/fa";

const Index = () => {
  const [keywords, setKeywords] = useState("");
  const [feeds, setFeeds] = useState([]);

  const handleKeywordChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleSearch = () => {
    // Simulate fetching RSS feeds based on keywords
    // This is a placeholder for actual web scraping logic
    setFeeds([
      { title: "News about " + keywords, description: "Latest news related to " + keywords, link: "#" },
      { title: "Updates on " + keywords, description: "Recent updates in " + keywords, link: "#" },
      { title: "Insights about " + keywords, description: "Insights and analysis on " + keywords, link: "#" },
    ]);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          RSS Feed Generator
        </Heading>
        <Text>Enter keywords to generate a custom RSS feed based on web scraped data.</Text>

        <Box w="100%">
          <Input placeholder="Enter keywords..." value={keywords} onChange={handleKeywordChange} />
          <Button leftIcon={<FaSearch />} colorScheme="blue" mt={2} onClick={handleSearch}>
            Generate Feed
          </Button>
        </Box>

        {feeds.length > 0 && (
          <Box w="100%" mt={4}>
            <Heading as="h2" size="lg">
              Generated Feeds
            </Heading>
            <List spacing={3}>
              {feeds.map((feed, index) => (
                <ListItem key={index} p={3} shadow="md" borderWidth="1px" borderRadius="md">
                  <Heading as="h3" size="md">
                    {feed.title}
                  </Heading>
                  <Text>{feed.description}</Text>
                  <Button as="a" href={feed.link} leftIcon={<FaRss />} colorScheme="teal" mt={2}>
                    View Feed
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
