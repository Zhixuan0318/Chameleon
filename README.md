<div align="center">
    <img src="img/chameleon-logo.png" width=100>
    <h1>Chameleon</h1>
    <strong>IPFS-Powered Topographic Data Library for Earth & Plant Science-Oriented Research</strong> 
</div>

<br>

![b1](https://img.shields.io/badge/Build%20On-IPFS-blue) ![b2](https://img.shields.io/badge/Integrate-Polygon-blue)

## Connect Topography Research Institutes Globally with IPFS

![hub](https://user-images.githubusercontent.com/69501009/201393730-6406b5e1-ea38-4e92-b8e2-3bebba60d2c9.png)

### Inspiration: Chameleon as Hub, IPFS as network

In my second year of Computer Science and Artificial Intelligence, I was tasked with developing a piece of software that performs individual tree segmentation using machine-learning techniques in order to assist a Malaysia-based oil palm research institute in increasing the effectiveness of oil palm tree analysis (such as height, inclination, disease, etc), particularly when dealing with large oil palm plantations. To put it another way, handling high-resolution topography data and performing laborious and complex calculations on it are required for this development assignment. During my study and development process, **I identified three aspects where topography research tasks may be improved**:

- Since high-quality and high-resolution topographic data typically have enormous file sizes, it takes a lot of resources to store and process it on the user's local machine. We need to find an external file system to deal with the storage of topographic data.

- It is challenging to find and gather different types of topographic data online for learning and testing purposes. To aggregate all the topographic data provided by various research institutions and organizations, we need a platform.

- We need a mechanism for data providers or collectors who provide us with high-quality, high-resolution usable topographical data to receive financial contributions from institutes, organizations, or even individual researchers in order to support and encourage their excellent work.

**Hence, I came out with the idea of building Chameleon...**

### <u>What is Chameleon?</u>

Chameleon is an IPFS-powered topographic data library that provides high-quality and high-resolution topographic data for earth and plant science-oriented research. It is based on the notion of **"Chameleon as Hub, IPFS as Network."**

**As a data collector and provider**, you can now contribute various types of topographic data (as well as topography-derived raster data) to Chameleon. Chameleon will act as the hub to aggregate all of the contributed data from the IPFS clusters and display it accordingly. Furthermore, all of the comprehensive metadata of the contributed topographic data will be tracked and updated on IPFS, which Chameleon will handle. Data providers can also choose to receive financial contributions by enabling Chameleon Sponsor, a Polygon Network-powered research data donation mechanism.

**As a user (institutes, researchers, etc)**,  you may now easily perform an instant download of topographic data from Chameleon with only a few simple clicks, as Chameleon will handle all IPFS fetching jobs (sometimes Chameleon will split big data into chunks before storing on IPFS, then will only process the combine of data during fetching). With the use of metadata on the IPFS, detailed information on topographic data (such as data attributes, licensing, and so on) provided will be kept up to current. Users can easily select their preferred data on Chameleon with the help of all the information offered by the data source.

## Key Features of Chameleon

### #1 Open Data Library

![opendatalibrary](https://user-images.githubusercontent.com/69501009/201098097-86d0fc25-3ffd-4c4f-a2cf-ba27021a1839.png)

Chameleon's Open Data Library is a repository for all high-quality topography data given by various data collectors and providers. All of the topographic data is stored on IPFS, and Chameleon will operate as a hub to aggregate and display the data. Users can easily browse through all of the data by just looking at the data overview and data tags when visiting the Open Data Library (which indicated the types of additional data resources attached to the main data). 

Users can access metadata for more extensive information about specific topographic data. Chameleon will assist in retrieving all information from IPFS and render it into a human-readable format. Moreover, Chameleon will handle all file processing and download operations from IPFS. Users can instantly download topographic data onto their local machine with just a few simple clicks. Easy!
 
### #2 Topography Data Contribution

![datacontribution](https://user-images.githubusercontent.com/69501009/201172462-851d80a0-d040-4276-9d6a-e57603982930.png)

Topographic data, as well as other topography-derived raster data, can be contributed to Chameleon by data collectors or providers. The specially built data submission pipeline will help the user through the process of providing information and details about the topographic data, which include the process of providing data files CIDs, data overview, data acknowledgment and citation, survey dates, data licensing, data providers, classification & coordinate systems, data included attributes, the max-min value of included attributes, and much more. 

All of the data info and details will then be processed by Chameleon to auto-generate metadata and stored on IPFS via Pinata. Chameleon will also keep track of all of the topography data's metadata on IPFS in its own database and ensure that it points to the most recent revision of metadata. After completing and submitting the data contribution, Chameleon will retrieve the topographic data from IPFS and add it to the aggregated data collection in the Open Data Library.

### #3 Topography Data Manager

![datamanager](https://user-images.githubusercontent.com/69501009/201102925-0bd3077a-6bb5-4dca-ba13-22251831d8bd.png)

Chameleon's Topography Data Manager is designed to allow users to conveniently manage the topography data that they have been given by using a single panel. The user can edit all of the topographic data information and details that they previously submitted and submit a new revision. Chameleon will process the modified data information and details and build a new revision of metadata to publish to IPFS using Pinata. The CID of the most recent metadata will also be updated and displayed to the user at the Open Data Library. Chameleon will be responsible for retrieving metadata from IPFS and rendering it on the individual data page based on the CID record in the database. Users will also be able to delete their contributed data through the Topography Data Manager. This step prevents Chameleon from aggregating and hiding this specific data from users.

### #4 Chameleon Sponsor - Powered by Polygon 🟣

![chameleonsponsor](https://user-images.githubusercontent.com/69501009/201177339-9e20d37f-a06d-49ed-9b98-835425fd983b.png)

Chameleon Sponsor is a Polygon Network-powered research data donation tool that allows users to make financial contributions directly to data collectors or suppliers on the topographic individual data page as a gesture of appreciation. When submitting topography data to Chameleon, the data collector or supplier has the option of enabling Chameleon Sponsor and providing the donation-receiving wallet address. Chameleon also offers a Chameleon Sponsor manager, who can assist the data collector or supplier in keeping track of all donations received by each data contribution to Chameleon. The sponsors' wallet addresses as well as sponsor amounts will be recorded, providing future references for data collectors or providers (for example, sending limited edition NFTs to donors on Polygon).

## How Chameleon Works | Behind the Scene

![bts](https://user-images.githubusercontent.com/69501009/201462004-0d756665-b78f-4126-bfcb-659cf9ae909a.png)

Chameleon is the heart of the whole interaction process, which communicate with the IPFS clusters via Pinata, Chameleon Database, Users (researcher, institute, or any party), and the Polygon Blockchain.

- **IPFS**: Forming a network to handle of the high-quality, high-resolution topography data and their respective metadata

- **Researcher**: Capable of downloading topography data from the Chameleon Open Data Library instantly. Chameleon will handle the IPFS file fetching job as well as the IPFS-fetched data pre-processing, after which the files will be downloaded to the user's local machine.

- **Chameleon Database**: Managing the metadata for all contributed topography data. It also manages metadata revision updates when the data owner modifies the data info and details.

- **Polygon Blockchain**: The foundation of Chameleon Sponsor, which allows users to make financial contributions to the data collector or provider.

## The next big step of Chameleon | Mini Chameleon
### Mini Chameleon: The nodes on Chameleon Network

![multihub](https://user-images.githubusercontent.com/69501009/201409519-e897a6bb-c176-4c05-aa50-168dce86a16c.png)

Chameleon is now simply a single hub network, which means that all users must rely on the platform and complete all tasks in this main hub. The Chameleon project's next major step is to bring Mini Chameleon to the network. In other words, we'll use Mini Chameleons to create a multi-hub Chameleon network. But how exactly?

### <u>What is Mini Chameleon?</u>

Mini Chameleons are nodes (or mini hubs) that branch off the main hub (Chameleon) and contribute to expanding the network as a whole. Anyone, including research institutes, businesses, universities, and individuals, can run a mini-chameleon and act as a mini-hub in the Chameleon network. All mini hubs can also serve as the main hub, forming their own mini Chameleon network. Consider how powerful and efficient it would be to expand the entire topography data network! Here are some of the features of the Mini Chameleon:

- Direct data calling from the main hub via IPFS and cloud computing using topographical data

- Create a private Chameleon network with advanced customization for personal usage or topography research with public access restrictions.

- Pre-processing of topography data by hashing before storing on IPFS, as well as decoding of IPFS-fetched topography data

## The Hacker Reflection

### Challenges I ran into

I was up against a problem when it came to increasing the performance of data processing on large topography data files in order to provide users with a seamless instant data download experience. In the end, I was able to pre-process the data by separating it into smaller chunks and retrieving it from IPFS in parallel, after which the data combining method will be executed at Chameleon's backend.

### Accomplishments that I'm proud of

- Utilise the technological advancement of IPFS as the solution to solve the heavy storage resource problem on the user's local machine due to large topographic data storage

- Develop a platform that acts as a hub to aggregate all the topographic data provided by various research institutions and organizations for research and learning purposes

- Designed a mechanism for data providers or collectors who provide us with high-quality, high-resolution usable topographical data to receive financial contributions from third-party

### What I learned

- Dealing with large topography data files and how to pre-process them into smaller chunks, fetch them from IPFS in a parallel way, as well as post-process the IPFS-fetched data by performing data combine

- Learn how to keep track of data info and details modification with metadata on IPFS

- Integrate Polygon when building a research data donation mechanism
