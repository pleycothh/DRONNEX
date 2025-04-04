using DRONNEX.API.Contracts.repositories;
using DRONNEX.API.Models.Blogs;
using DRONNEX.API.Models.Products;
using System.Reflection.Metadata;

namespace DRONNEX.API.Repository
{
    public class BlogRepository : IBlogRepository
    {
        protected readonly string collectionName = "products";
        // Example blog content
        protected readonly List<BlogEntity> exampleBlogs =
            new List<BlogEntity>()
            {
                new BlogEntity
                {
                    Id = new Guid("123e4567-e89b-12d3-a456-426614174000"),
                    Title = "Onboard Computers in Drones",
                    Sections = new List<BlogSection>
                    {
                        new BlogSection
                        {
                            Heading = "Introduction",
                            Content = "<p>Drones across various industries are increasingly equipped with onboard computers (also called companion computers) that serve as the “brain” alongside the flight controller. These onboard systems process sensor data (especially camera feeds) in real time to enable high-level functions such as autonomous navigation, obstacle avoidance, and AI-based analysis...</p>"
                        },
                        new BlogSection
                        {
                            Heading = "Agriculture (Precision Farming)",
                            Content = "<p>Agriculture was an early adopter of drone technology for monitoring crops and automating fieldwork...</p><p>Real-Time Weed Detection & Spraying: Drones equipped with AI vision can distinguish weeds from crops in real time and actuate spot-spraying...</p><p>Crop Health Monitoring: Onboard computers process multispectral or RGB images to assess crop health indicators (NDVI, pigment indices) during flight...</p><p>Autonomous Field Navigation: Farmland drones often fly beyond visual line of sight, so onboard processors handle path planning and obstacle avoidance...</p><p>Variable-Rate Application: By merging sensor data and GPS maps, an onboard computer can control the variable release of seeds, water, or fertilizer...</p>"
                        },
                        new BlogSection
                        {
                            Heading = "Surveillance and Security",
                            Content = "<p>In surveillance, security, and public safety applications, drones act as mobile observers – often tasked with detecting intruders, monitoring crowds, or securing perimeters...</p><p>Perimeter Intrusion Detection: Drones can autonomously patrol fences or borders using onboard vision to detect humans, vehicles, or boats entering restricted zones...</p><p>Crowd Monitoring and Anomaly Detection: Law enforcement or event security drones monitor large gatherings for public safety...</p><p>Follow and Track Missions: In police or military operations, a drone may be tasked to follow a target vehicle or person semi-autonomously...</p><p>Non-Visual Sensors for Security: Although vision is primary, some security drones use other onboard sensor processing...</p>"
                        }
                    },
                    Footer = "&copy; 2025 DRONNEX. All rights reserved."
                },
                                new BlogEntity
                {
                    Id = new Guid("e3f2c1a4-5b6d-4c8e-9f7a-123456789abc"),
                    Title = "Onboard Computers in Drones 2",
                    Sections = new List<BlogSection>
                    {
                        new BlogSection
                        {
                            Heading = "Introduction",
                            Content = "<p>Drones across various industries are increasingly equipped with onboard computers (also called companion computers) that serve as the “brain” alongside the flight controller. These onboard systems process sensor data (especially camera feeds) in real time to enable high-level functions such as autonomous navigation, obstacle avoidance, and AI-based analysis...</p>"
                        },
                        new BlogSection
                        {
                            Heading = "Agriculture (Precision Farming)",
                            Content = "<p>Agriculture was an early adopter of drone technology for monitoring crops and automating fieldwork...</p><p>Real-Time Weed Detection & Spraying: Drones equipped with AI vision can distinguish weeds from crops in real time and actuate spot-spraying...</p><p>Crop Health Monitoring: Onboard computers process multispectral or RGB images to assess crop health indicators (NDVI, pigment indices) during flight...</p><p>Autonomous Field Navigation: Farmland drones often fly beyond visual line of sight, so onboard processors handle path planning and obstacle avoidance...</p><p>Variable-Rate Application: By merging sensor data and GPS maps, an onboard computer can control the variable release of seeds, water, or fertilizer...</p>"
                        },
                        new BlogSection
                        {
                            Heading = "Surveillance and Security",
                            Content = "<p>In surveillance, security, and public safety applications, drones act as mobile observers – often tasked with detecting intruders, monitoring crowds, or securing perimeters...</p><p>Perimeter Intrusion Detection: Drones can autonomously patrol fences or borders using onboard vision to detect humans, vehicles, or boats entering restricted zones...</p><p>Crowd Monitoring and Anomaly Detection: Law enforcement or event security drones monitor large gatherings for public safety...</p><p>Follow and Track Missions: In police or military operations, a drone may be tasked to follow a target vehicle or person semi-autonomously...</p><p>Non-Visual Sensors for Security: Although vision is primary, some security drones use other onboard sensor processing...</p>"
                        }
                    },
                    Footer = "&copy; 2025 DRONNEX. All rights reserved."
                }
            };


        public BlogRepository()
        {

        }

        public async Task<BlogEntity> GetBlogByIdAsync(Guid id)
        {
            return await Task.FromResult(exampleBlogs.FirstOrDefault(x => x.Id == id));
        }

        /*
         
         
<!--body>
  <div class="container py-5">
    <h1 class="display-4 mb-4">Onboard Computers in Drones: Industry Use Cases and Applications</h1>
    <p class="lead">Explore how onboard computers are transforming drones across agriculture, surveillance, delivery, inspection, and industrial applications.</p>

    <hr class="my-5">

    <section>
      <h2>Introduction</h2>
      <p>Drones across various industries are increasingly equipped with onboard computers (also called companion computers) that serve as the “brain” alongside the flight controller. These onboard systems process sensor data (especially camera feeds) in real time to enable high-level functions such as autonomous navigation, obstacle avoidance, and AI-based analysis...</p>
    </section>

    <section class="mt-5">
      <h2>Agriculture (Precision Farming)</h2>
      <p>Agriculture was an early adopter of drone technology for monitoring crops and automating fieldwork...</p>
      <p>Real-Time Weed Detection & Spraying: Drones equipped with AI vision can distinguish weeds from crops in real time and actuate spot-spraying...</p>
      <p>Crop Health Monitoring: Onboard computers process multispectral or RGB images to assess crop health indicators (NDVI, pigment indices) during flight...</p>
      <p>Autonomous Field Navigation: Farmland drones often fly beyond visual line of sight, so onboard processors handle path planning and obstacle avoidance...</p>
      <p>Variable-Rate Application: By merging sensor data and GPS maps, an onboard computer can control the variable release of seeds, water, or fertilizer...</p>
    </section>

    <section class="mt-5">
      <h2>Surveillance and Security</h2>
      <p>In surveillance, security, and public safety applications, drones act as mobile observers – often tasked with detecting intruders, monitoring crowds, or securing perimeters...</p>
      <p>Perimeter Intrusion Detection: Drones can autonomously patrol fences or borders using onboard vision to detect humans, vehicles, or boats entering restricted zones...</p>
      <p>Crowd Monitoring and Anomaly Detection: Law enforcement or event security drones monitor large gatherings for public safety...</p>
      <p>Follow and Track Missions: In police or military operations, a drone may be tasked to follow a target vehicle or person semi-autonomously...</p>
      <p>Non-Visual Sensors for Security: Although vision is primary, some security drones use other onboard sensor processing...</p>
    </section>

    <section class="mt-5">
      <h2>Delivery and Logistics</h2>
      <p>Drone delivery – transporting packages by air – presents another major industry segment benefiting from onboard computers...</p>
      <p>In-Flight Obstacle Avoidance: Delivery routes often go through suburban areas with trees, poles, buildings, and possibly low-flying aircraft...</p>
      <p>Precision Landing and Drop-off: When arriving at the destination, a delivery drone might use downward-facing cameras and rangefinders to identify a safe landing zone...</p>
      <p>Adaptive Route Autonomy: Delivery drones may be given a pre-planned route, but conditions can change...</p>
      <p>Payload Management and Other Sensors: In specialized deliveries (like medical deliveries of blood samples or organs, as done by Zipline and others), maintaining the payload’s condition is critical...</p>
    </section>

    <section class="mt-5">
      <h2>Mapping and Inspection</h2>
      <p>One of the most widespread drone applications is aerial mapping and infrastructure inspection...</p>
      <p>Aerial Mapping & Surveying: In a typical mapping mission (say, mapping a construction site or farmland for a survey), a drone captures hundreds of images with GPS tags...</p>
      <p>Infrastructure Inspection (Vision-Based): When inspecting physical structures, drones now often carry computer vision models to detect faults or areas of interest...</p>
      <p>SLAM and GPS-Denied Navigation: Many inspection targets are indoors or in GPS-denied environments...</p>
      <p>Adaptive Flight Planning: With on-board intelligence, an inspection drone can make decisions like a human pilot would...</p>
    </section>

    <section class="mt-5">
      <h2>Industrial Applications</h2>
      <p>Beyond the well-defined sectors above, onboard computers in drones are also driving innovative use cases in general industrial and enterprise environments...</p>
      <p>Warehouse Inventory Management: Drones navigate indoor warehouses to scan inventory (barcodes, RFID, images of products)...</p>
      <p>Industrial Inspections (Interior): Drones perform scheduled inspections of equipment (pipes, tanks, conveyors) in factories or oil/gas facilities...</p>
      <p>Logistics and Parcel Movement: Beyond last-mile delivery outdoors, some drones are being tested for moving parts or goods within large facilities...</p>
      <p>Non-Visual Sensing Missions: Industrial drones also carry non-camera payloads like chemical sensors, magnetometers, radiation detectors...</p>
    </section>

    <section class="mt-5">
      <h2>Conclusion and Comparative Overview</h2>
      <p>From the above, it’s evident that onboard computers have become a fundamental enabling technology for drones in virtually every industry...</p>
      <p>Latency and Real-Time Action: Drones often must react in milliseconds (to avoid a collision or target a spray)...</p>
      <p>Autonomy/Offline Capability: Drones operate in areas without reliable comms (farms, disaster zones, indoor facilities)...</p>
      <p>Bandwidth and Data Reduction: HD cameras generate huge data...</p>
      <p>Task-Specific Optimization: An onboard computer can be tightly integrated with the drone’s control system...</p>
      <p>Increasing Capabilities: As drone roles expand (swarm coordination, package delivery networks, etc.), onboard computing provides a scalable way to add capabilities...</p>
    </section>

    <hr class="my-5">
    <footer class="text-muted text-center">
      <p class="small">&copy; 2025 DRONNEX. All rights reserved.</p>
    </footer>
  </div>
</body>
</html-->
         */
    }
}
