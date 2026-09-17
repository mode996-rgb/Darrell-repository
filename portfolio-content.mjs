export const projects = [
  {
    "slug": "mood",
    "title": "Mood",
    "category": "Mobile UX · Event discovery",
    "role": "UX & interface design",
    "format": "Low-fidelity wireframes and visual prototype",
    "summary": "From “what’s on?” to a ticket in hand: an event discovery and booking app.",
    "deck": "I designed Mood to connect the decisions around a night out: finding an event, choosing tickets, and knowing where to find them afterward.",
    "cover": [
      "mood-home",
      "mood-events",
      "mood-tickets"
    ],
    "tone": "purple",
    "overview": "An event listing is only the start of the task. Someone still needs to decide whether it fits their plans, choose tickets, check out, and retrieve the booking. I worked through that whole journey in Figma, starting with low-fidelity screens and developing a visual prototype.",
    "sections": [
      {
        "title": "Map the whole trip through the app",
        "text": "I started with the sequence of decisions: browse events, narrow the choices, open an event, select tickets, and check out. Including confirmation, account, and ticket screens early helped me consider what happens after the transaction, too. The wireframes establish those connections before introducing imagery and color.",
        "images": [
          [
            "mood-low-events",
            "Low-fidelity event listing"
          ],
          [
            "mood-low-filters",
            "Early filter structure"
          ],
          [
            "mood-low-detail",
            "Low-fidelity event details"
          ]
        ]
      },
      {
        "title": "Show people what they’ve filtered",
        "text": "The early filter screen uses days of the week. In the developed prototype, a date range, genre, and venue give the search more specific boundaries. Applied filter chips carry those choices back to the results screen, so people can see why they’re getting that set of events. Event imagery provides a second way to scan the listings.",
        "images": [
          [
            "mood-home",
            "Mood home screen"
          ],
          [
            "mood-events",
            "Event discovery"
          ],
          [
            "mood-filters",
            "Date, genre, and venue filters"
          ],
          [
            "mood-filtered",
            "Results with applied filters"
          ]
        ]
      },
      {
        "title": "Give the booking a clear ending",
        "text": "The design continues past payment to confirmation and a dedicated ticket screen. I also included an empty account state for someone who hasn’t made a booking yet. These states matter because a successful purchase still leaves a practical question: where is my ticket when I need it?",
        "images": [
          [
            "mood-detail",
            "Event details and ticket selection"
          ],
          [
            "mood-checkout",
            "Checkout"
          ],
          [
            "mood-confirmation",
            "Purchase confirmation"
          ],
          [
            "mood-tickets",
            "Saved tickets"
          ],
          [
            "mood-empty-account",
            "Account empty state"
          ]
        ]
      }
    ],
    "outcome": "The result is a connected event-booking prototype, developed from low-fidelity wireframes. The next thing I’d test is whether a first-time user can apply a filter, buy a ticket, and find it again without help. I’d pay particular attention to whether the applied filters are noticeable and the confirmation makes the next step clear.",
    "source": "Individual academic concept · Figma wireframes and visual prototype. The screens show design work; usability testing is a proposed next step.",
    "focus": "Keep browsing, filtering, and booking connected, with a clear destination for purchased tickets."
  },
  {
    "slug": "bakery",
    "title": "Rose Family Bakery POS",
    "category": "Product UX · Tablet ordering",
    "role": "UX & wireframe design",
    "format": "Low- and mid-fidelity tablet interfaces",
    "summary": "A tablet ordering flow that keeps custom cake details and the running order in view.",
    "deck": "I designed a bakery point-of-sale concept around a detailed task: helping staff take a custom order without losing track of the choices already made.",
    "cover": [
      "bakery-low-dashboard"
    ],
    "tone": "peach",
    "overview": "A custom bakery order involves more than choosing a product. Staff need to capture the cake options, a message, the order timing, and payment details. I explored that process in low- and mid-fidelity tablet wireframes, using a staged flow and a persistent order summary to hold the information together.",
    "sections": [
      {
        "title": "Separate the decisions into steps",
        "text": "The low-fidelity flow moves through setup, products, review, customer and payment information, and confirmation. Order timing is part of the task: the concept requires at least 48 hours’ notice and allows scheduling up to 60 days ahead. Putting setup before product customization gives those constraints a place in the flow.",
        "images": [
          [
            "bakery-low-dashboard",
            "Low-fidelity dashboard"
          ],
          [
            "bakery-low-products",
            "Early product selection"
          ]
        ]
      },
      {
        "title": "Keep the current order beside the choices",
        "text": "The mid-fidelity screens develop the product categories and cake options: size, flavor, theme, quantity, and a message of up to 50 characters. The current order remains alongside these controls. That layout is intended to let staff check what’s already included without leaving the customization step.",
        "images": [
          [
            "bakery-order-type",
            "Mid-fidelity order setup"
          ],
          [
            "bakery-products",
            "Product selection and current order"
          ],
          [
            "bakery-customize",
            "Cake customization"
          ]
        ]
      },
      {
        "title": "Make corrections possible before payment",
        "text": "The review step brings items, edit and remove actions, subtotal, delivery, and total together. It provides a deliberate pause before payment, when a staff member can check the order with the customer. The low- and mid-fidelity screens below show how that hierarchy developed, followed by the confirmation state.",
        "images": [
          [
            "bakery-low-review",
            "Low-fidelity order review"
          ],
          [
            "bakery-review",
            "Mid-fidelity order review"
          ],
          [
            "bakery-confirmation",
            "Order confirmation"
          ]
        ]
      }
    ],
    "outcome": "This work turns a detailed ordering task into a sequence of decisions with a visible running summary. The next step would be to test it with bakery staff: can they change a cake option, explain the total, and catch an incorrect date before payment? That would help determine whether the staged flow suits a real counter conversation.",
    "source": "Individual academic concept · Low- and mid-fidelity Figma wireframes. Product-image placeholders are intentional at this stage.",
    "focus": "Break a complex order into manageable steps while keeping its details and total visible."
  },
  {
    "slug": "art-history",
    "title": "Journey Through Design",
    "category": "Collaborative UX · Art history",
    "role": "Contributing designer & usability testing",
    "format": "Team design system and interactive prototype",
    "summary": "A team art-history experience, with testing that exposed unclear return paths and filters.",
    "deck": "Working with GIT 540 Team 9, I contributed to an art-history experience that helps people move from a broad timeline to artists and individual works.",
    "cover": [
      "art-history-home"
    ],
    "tone": "blue",
    "overview": "Journey Through Design offers several starting points: a historical timeline, a search, or a filtered collection. The challenge is to connect those routes so exploring one artist or artwork doesn’t become a dead end. Our team developed wireframes, a shared design system, an interactive prototype, and usability-testing materials.",
    "credit": "I contributed to the design and usability testing as part of GIT 540 Team 9. The interface screens are shared team work; the testing observations discussed here come from my notes in the project.",
    "sections": [
      {
        "title": "Offer more than one way into the collection",
        "text": "A timeline suits someone exploring a period, while search supports someone with a subject in mind. Filters for time period, nationality, movement, and artist narrow the collection further. Artist and artwork pages connect these broad views to individual subjects. Together, those routes support both browsing and a more directed search.",
        "images": [
          [
            "art-history-timeline",
            "Timeline exploration — team design"
          ],
          [
            "art-history-filters",
            "Collection filters — team design"
          ]
        ]
      },
      {
        "title": "Look beyond whether a task was completed",
        "text": "In my mid-fidelity testing notes, a participant completed the first task but did not always know how to return. They described “Going back” as confusing. Filter categories also prompted uncertainty. Task completion alone would have missed those moments; the observations point to clearer return paths and more understandable filter choices.",
        "images": [
          [
            "art-history-testing-notes",
            "Mid-fidelity testing notes credited to Darrell"
          ],
          [
            "art-history-artist",
            "Artist page — team design"
          ]
        ]
      },
      {
        "title": "Keep the experience consistent, then check it again",
        "text": "The team’s shared typography, blue and red palette, navigation, and controls give the different page types a common language. My later notes record successful navigation through gallery, search, timeline filters, and artwork. That is encouraging feedback from those sessions, but I’d still retest the earlier navigation concerns with new participants before considering them resolved.",
        "images": [
          [
            "art-history-typography",
            "Shared typography system"
          ],
          [
            "art-history-colors",
            "Shared color palette"
          ],
          [
            "art-history-search",
            "Search — team design"
          ],
          [
            "art-history-artwork",
            "Artwork detail — team design"
          ]
        ]
      }
    ],
    "outcome": "The strongest lesson in this project is the gap between finishing a task and feeling confident along the way. My testing contribution helped make that distinction visible. In another iteration, I’d prioritize return navigation and filter labels, then use the same tasks to check whether the changes address the observed confusion.",
    "source": "Collaborative academic project · GIT 540 Team 9. Interface and design-system screens represent the team’s work; testing notes identify my contributions.",
    "focus": "Support open-ended exploration while helping people understand where they are and how to return."
  },
  {
    "slug": "ai-driving",
    "title": "AI Driving",
    "category": "Senior project · Web design & development",
    "role": "Website design & HTML/CSS development",
    "format": "Complete four-page website concept",
    "summary": "A four-page capstone website, taken from an HTML prototype to a working implementation.",
    "deck": "For my senior project, I designed and built a website for a fictional autonomous-driving brand, bringing the page structure, visual design, and HTML/CSS implementation together.",
    "cover": [
      "/assets/ai-driving.png"
    ],
    "tone": "green",
    "overview": "AI Driving was an opportunity to carry a website through both design and implementation. I organized the concept around Home, About, Services, and Contact, then developed the visual treatment around that structure. The complete website and my original process report are available below.",
    "sections": [
      {
        "title": "Work out the structure before the styling",
        "text": "I began with an HTML prototype before adding CSS. That gave me a way to work through navigation, button placement, and images while the structure was still easy to change. Separating Home, About, Services, and Contact also gave each page a specific job."
      },
      {
        "title": "Refine the site in the browser",
        "text": "My process report documents checks on laptop, desktop, and mobile, followed by design refinements. I developed the darker blue and gray palette around the technology theme. Building the pages in HTML and CSS let me work with the actual layout and navigation rather than stopping at a static design."
      },
      {
        "title": "Try the working website",
        "text": "Open the complete site to move between all four pages. The three-page process report shows how I approached the prototype and visual refinements. The contact form is a demo, so trying it won’t send a message."
      }
    ],
    "outcome": "The finished deliverable is a working four-page website and a record of the design process behind it. My next iteration would focus on comprehension: after exploring the site, can someone explain the concept and find the relevant service? I’d pair that with a keyboard and contrast review of the implementation.",
    "source": "Individual senior project · HTML and CSS. AI Driving is a fictional brand; its technology and performance statements are concept content.",
    "focus": "Use a simple four-page structure to introduce the concept and make supporting information easy to find."
  },
  {
    "slug": "loaded-accessibility",
    "title": "Loaded Accessibility Review",
    "category": "Accessibility · Interface analysis",
    "role": "Accessibility review & annotation",
    "format": "Annotated page reconstructions",
    "summary": "An annotated accessibility review of the path from browsing to checkout.",
    "deck": "I reviewed an e-commerce journey through five accessibility lenses, using annotated page reconstructions to make potential barriers easier to discuss.",
    "cover": [
      "loaded-homepage"
    ],
    "tone": "lime",
    "overview": "A shopping flow needs to work across the homepage, product page, and checkout. I reconstructed these page types and used lettered annotations to organize potential accessibility issues. This makes the review traceable: each marker points to an element and a category in the legend.",
    "sections": [
      {
        "title": "Give each annotation a clear purpose",
        "text": "The legend groups the review into contrast, alternative text, keyboard focus, form labels, and heading hierarchy. Using the same categories across pages makes it easier to compare patterns and see where further investigation is needed.",
        "images": [
          [
            "loaded-homepage",
            "Annotated homepage reconstruction"
          ],
          [
            "loaded-legend",
            "Accessibility annotation legend"
          ]
        ]
      },
      {
        "title": "Follow the task into the form",
        "text": "The review continues from browsing to product selection and checkout. At checkout, labels and focus become especially important: people need to understand what each field asks for and where they are as they move through it. The annotations identify what to inspect in the implemented page.",
        "images": [
          [
            "loaded-product",
            "Annotated product page"
          ],
          [
            "loaded-checkout",
            "Annotated checkout"
          ]
        ]
      }
    ],
    "outcome": "The result is an organized starting point for an accessibility review. The next step is verification in the live implementation: measure contrast, inspect text alternatives and semantics, and walk through the task using a keyboard. A wireframe can flag a concern, but it cannot establish how the underlying code behaves.",
    "source": "Independent academic review of loaded.com · Annotated Figma reconstructions. No client affiliation; this is a design review rather than a live-site compliance audit.",
    "focus": "Connect accessibility concerns to specific elements and steps in a shopping task."
  },
  {
    "slug": "phoenix",
    "title": "City of Phoenix",
    "category": "Responsive UX · Wireframe study",
    "role": "Interface analysis & wireframe recreation",
    "format": "Desktop and mobile page wireframes",
    "summary": "A desktop and mobile wireframe study of a service-heavy city homepage.",
    "deck": "I recreated the City of Phoenix homepage as desktop and mobile wireframes to study how a large amount of public information is organized across screen sizes.",
    "cover": [
      "phoenix-desktop",
      "phoenix-mobile"
    ],
    "tone": "sand",
    "overview": "Residents, businesses, and visitors arrive at a city website with very different tasks. This study looks at how those needs sit together on one long page. Recreating the layouts in low fidelity let me focus on grouping, order, and screen space.",
    "sections": [
      {
        "title": "Separate immediate tasks from deeper information",
        "text": "The desktop wireframe combines audience navigation, common service shortcuts, heat-relief information, news, and government resources. Actions such as paying, reporting an issue, and finding trash information have a different urgency from browsing city news. Reconstructing the page made those layers easier to examine.",
        "images": [
          [
            "phoenix-desktop",
            "Full desktop wireframe · 1440 px wide"
          ]
        ],
        "long": true
      },
      {
        "title": "Study what changes when the page narrows",
        "text": "The mobile version is 390 px wide, compared with 1440 px on desktop. With less room for content side by side, grouping and reading order become more prominent. Scroll through the wireframes or enlarge them to compare how the page is arranged at each size.",
        "images": [
          [
            "phoenix-mobile",
            "Full mobile wireframe · 390 px wide"
          ]
        ],
        "long": true
      }
    ],
    "outcome": "This is a study in responsive structure and information hierarchy. If I extended it into a redesign, I’d first identify the most common resident tasks and test how quickly people can locate them on mobile. That evidence would help determine what deserves priority, rather than rearranging the page on visual preference alone.",
    "source": "Independent academic recreation of the City of Phoenix website · Desktop and mobile Figma wireframes. This was a study, not commissioned city work.",
    "focus": "Understand how service shortcuts, news, and city resources share one page without losing their hierarchy."
  }
];
