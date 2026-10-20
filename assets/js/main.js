(function () {
  "use strict";

  const BUSINESS = {
    name: "AL SHABANA TYPING & TRAVELS",
    listingName: "Al Shabana Typing Center & Studio",
    address:
      "Al Rukn St, near Maharjan and NSR, 1–37 Al Shams St, Al Sila, Abu Dhabi, UAE",
    phonePrimary: "+971545143855",
    phonePrimaryDisplay: "+971 54 514 3855",
    phoneAlt: "+971509301403",
    phoneAltDisplay: "+971 50 930 1403",
    whatsapp: "971545143855",
    rating: "4.9/5",
    mapsQuery:
      "AL SHABANA TYPING CENTER & STUDIO, Al Rukn St, Al Sila, Abu Dhabi",
    mapsCoords: "24.074597,51.763261",
  };

  const MESSAGES = {
    general:
      "Hello Al Shabana Typing & Travels, I would like to enquire about your services. Could you please guide me?",
    visa:
      "Hello, I would like to enquire about your visa typing services. Could you please share the requirements?",
    studio:
      "Hello, I would like to enquire about your studio photography and photo printing services.",
  };

  function whatsappUrl(message) {
    return (
      "https://wa.me/" +
      BUSINESS.whatsapp +
      "?text=" +
      encodeURIComponent(message)
    );
  }

  function mapsSearchUrl() {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(BUSINESS.mapsQuery)
    );
  }

  function mapsDirectionsUrl() {
    return (
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(BUSINESS.mapsQuery)
    );
  }

  window.AlShabana = {
    BUSINESS: BUSINESS,
    MESSAGES: MESSAGES,
    whatsappUrl: whatsappUrl,
    mapsSearchUrl: mapsSearchUrl,
    mapsDirectionsUrl: mapsDirectionsUrl,
    SERVICES: null,
  };

  const SERVICES = {
    "visa-typing": {
      slug: "visa-typing",
      category: "Visa & Immigration",
      title: "Visa Typing",
      intro:
        "Assistance with preparing and typing visa-related forms and supporting documentation for enquiry and submission.",
      covers: [
        "Typing support for common visa-related applications.",
        "Help organising the information you bring for the form.",
        "Guidance on what to confirm with the relevant authority.",
      ],
      questions: [
        "Which visa type are you enquiring about?",
        "Do you already have copies of the documents you have been asked to provide?",
        "Would you like the enquiry handled in person in Al Sila?",
      ],
      related: ["visit-visa", "family-visa", "immigration"],
    },
    "visit-visa": {
      slug: "visit-visa",
      category: "Visa & Immigration",
      title: "Visit Visa Services",
      intro:
        "Support for visit visa typing and related documentation. Availability and requirements depend on the application and the issuing authority.",
      covers: [
        "Typing and document preparation for visit visa enquiries.",
        "Help reviewing the information needed before you contact us.",
        "A chance to discuss next steps with the team in Al Sila.",
      ],
      questions: [
        "Is this a new visit visa enquiry or a follow-up?",
        "Who will be travelling, and from which country?",
        "Have you been given a document list to complete?",
      ],
      related: ["family-visa", "visa-typing", "emirates-id"],
    },
    "family-visa": {
      slug: "family-visa",
      category: "Visa & Immigration",
      title: "Family Visa Services",
      intro:
        "Assistance with family visa typing and related paperwork. The centre can help you prepare documents; it does not decide eligibility or approval.",
      covers: [
        "Typing support for family visa-related applications.",
        "Help assembling information you already have.",
        "Discussion of what still needs to be confirmed.",
      ],
      questions: [
        "Which family members are included in the enquiry?",
        "Do you have sponsorship or related documents to hand?",
        "Would you prefer to visit the centre or start on WhatsApp?",
      ],
      related: ["visit-visa", "visa-typing", "emirates-id"],
    },
    immigration: {
      slug: "immigration",
      category: "Visa & Immigration",
      title: "Immigration-Related Documentation",
      intro:
        "Typing and document preparation for immigration-related paperwork, subject to the type of request and current availability.",
      covers: [
        "Support preparing immigration-related forms.",
        "Help checking that the information you provide is complete enough to enquire.",
        "Referral of questions that must be confirmed with the relevant office.",
      ],
      questions: [
        "What type of immigration-related document do you need help with?",
        "Have you been asked to complete a specific form?",
        "When do you need to visit the centre?",
      ],
      related: ["visa-typing", "document-clearing", "attestation"],
    },
    "domestic-worker": {
      slug: "domestic-worker",
      category: "Visa & Immigration",
      title: "Domestic Worker Visa-Related Assistance",
      intro:
        "Where available, assistance with domestic worker visa-related typing and paperwork. Please confirm current availability with the team.",
      covers: [
        "Typing support for domestic worker visa-related forms, where offered.",
        "Help gathering the details you have been asked to provide.",
        "Clear next steps after you speak with the centre.",
      ],
      questions: [
        "Is this a new application or a renewal-related enquiry?",
        "Do you already have the requested supporting papers?",
        "Would you like us to confirm whether this service is available today?",
      ],
      related: ["visa-typing", "family-visa", "emirates-id"],
    },
    "emirates-id": {
      slug: "emirates-id",
      category: "Emirates ID & Document Clearing",
      title: "Emirates ID Typing",
      intro:
        "Typing assistance for Emirates ID-related applications and updates. Requirements are set by the issuing authority and should be confirmed for your case.",
      covers: [
        "Help completing Emirates ID-related typing.",
        "Support reviewing the details you bring to the centre.",
        "Guidance on what still needs to be confirmed.",
      ],
      questions: [
        "Is this a new Emirates ID enquiry, renewal, or an update?",
        "Do you have your current ID or application reference, if any?",
        "Would you like to visit Al Sila or start on WhatsApp?",
      ],
      related: ["government-typing", "document-clearing", "visa-typing"],
    },
    "document-clearing": {
      slug: "document-clearing",
      category: "Emirates ID & Document Clearing",
      title: "Document Clearing",
      intro:
        "Assistance with document clearing enquiries. The team can help you prepare paperwork; processing depends on the relevant offices and your documents.",
      covers: [
        "Support preparing documents for clearing-related requests.",
        "Help checking that the set of papers you have is ready to discuss.",
        "An opportunity to confirm applicable charges before proceeding.",
      ],
      questions: [
        "Which documents need clearing assistance?",
        "Have you been given a specific process to follow?",
        "Do you need this alongside typing or attestation?",
      ],
      related: ["attestation", "emirates-id", "document-preparation"],
    },
    "government-typing": {
      slug: "government-typing",
      category: "Emirates ID & Document Clearing",
      title: "Government-Related Typing",
      intro:
        "Typing support for selected government-related forms and applications. Please ask the team which requests they can currently assist with.",
      covers: [
        "Typing of selected government-related forms.",
        "Help organising the information required on the form.",
        "Discussion of related services such as printing or attestation.",
      ],
      questions: [
        "Which form or department is the enquiry related to?",
        "Do you have a sample, portal screenshot, or document list?",
        "Is printing or photocopying also required?",
      ],
      related: ["emirates-id", "food-control", "icv"],
    },
    "document-preparation": {
      slug: "document-preparation",
      category: "Emirates ID & Document Clearing",
      title: "Document Preparation and Related Assistance",
      intro:
        "Help preparing and organising documents before you submit or follow up on an application.",
      covers: [
        "Support assembling and typing related paperwork.",
        "Photocopying or printing of selected documents, subject to availability.",
        "A review of questions to confirm with the centre before you proceed.",
      ],
      questions: [
        "What is the document for?",
        "How many pages or copies do you expect to need?",
        "Do you also need attestation or clearing assistance?",
      ],
      related: ["document-clearing", "photocopying", "attestation"],
    },
    "food-control": {
      slug: "food-control",
      category: "Emirates ID & Document Clearing",
      title: "Food Control & Civil Defence Work",
      intro:
        "Assistance with selected Food Control and Civil Defence-related paperwork, as advertised by the centre. Please confirm the exact request and current availability.",
      covers: [
        "Help with typing and document preparation for related enquiries.",
        "Discussion of what supporting papers you should bring.",
        "No assumption of approval or official affiliation.",
      ],
      questions: [
        "Is the enquiry related to Food Control, Civil Defence, or both?",
        "Have you been issued a specific form or notice?",
        "Would you like to confirm availability before visiting?",
      ],
      related: ["government-typing", "document-clearing", "icv"],
    },
    "legal-translation": {
      slug: "legal-translation",
      category: "Emirates ID & Document Clearing",
      title: "Legal Translations & Case Registrations",
      intro:
        "The centre advertises assistance with legal translations and case registrations. Scope, language, and availability should be confirmed with the team for your documents.",
      covers: [
        "An enquiry point for translation and case-registration related paperwork.",
        "Help understanding what to bring to the centre.",
        "Coordination with typing or attestation where relevant.",
      ],
      questions: [
        "Which language pair and document type are involved?",
        "Is this connected to a court, visa, or other process?",
        "Do you have copies of the original documents?",
      ],
      related: ["attestation", "document-preparation", "government-typing"],
    },
    icv: {
      slug: "icv",
      category: "Emirates ID & Document Clearing",
      title: "In-Country Value (ICV) Certificate Support",
      intro:
        "Assistance with ICV certificate-related documentation, as advertised by the centre. Please discuss your business paperwork with the team to confirm what they can help with.",
      covers: [
        "Support preparing selected ICV-related documents.",
        "Help organising the information you already have.",
        "Clear confirmation of next steps and applicable charges.",
      ],
      questions: [
        "Is this a new ICV-related enquiry or an update?",
        "Which business documents do you have ready?",
        "Would you prefer to discuss this in person?",
      ],
      related: ["government-typing", "document-clearing", "attestation"],
    },
    "passport-renewal": {
      slug: "passport-renewal",
      category: "Passport & Identity Services",
      title: "Pakistan Passport Renewal Assistance",
      intro:
        "Assistance with Pakistan passport renewal-related typing and documentation. Eligibility and processing remain with the relevant authority.",
      covers: [
        "Help preparing renewal-related forms and papers.",
        "Guidance on questions to confirm before you proceed.",
        "Related identity documentation support, where available.",
      ],
      questions: [
        "Is the passport expired, soon to expire, or already in process?",
        "Do you have previous passport details available?",
        "Do you also need ID renewal assistance?",
      ],
      related: ["pakistan-id", "identity-docs", "photography"],
    },
    "pakistan-id": {
      slug: "pakistan-id",
      category: "Passport & Identity Services",
      title: "Pakistan ID Renewal Assistance",
      intro:
        "Support for Pakistan ID renewal-related typing and paperwork. The centre can help you prepare documents; it does not issue IDs or confirm eligibility.",
      covers: [
        "Typing assistance for ID renewal-related forms.",
        "Help reviewing the papers you bring.",
        "Discussion of photo or printing needs, if required.",
      ],
      questions: [
        "Which ID document is the enquiry about?",
        "Do you have existing ID copies with you?",
        "Would you like to ask about studio photos as well?",
      ],
      related: ["passport-renewal", "identity-docs", "photography"],
    },
    "identity-docs": {
      slug: "identity-docs",
      category: "Passport & Identity Services",
      title: "Related Identity Documentation",
      intro:
        "Assistance with related identity documentation enquiries. Please describe the document so the team can confirm whether they can help.",
      covers: [
        "Typing and preparation for selected identity-related papers.",
        "Coordination with photography or printing if needed.",
        "Clear communication about what cannot be promised.",
      ],
      questions: [
        "Which identity document do you need help with?",
        "Is this connected to a visa or Emirates ID enquiry?",
        "Do you need copies or printed photos?",
      ],
      related: ["passport-renewal", "emirates-id", "photo-printing"],
    },
    insurance: {
      slug: "insurance",
      category: "Insurance Services",
      title: "Insurance Services",
      intro:
        "Assistance with selected insurance-related enquiries advertised by the centre, including Daman, vehicle insurance, and IELO insurance services. Policy details should be confirmed with the team.",
      covers: [
        "A starting point for Daman, vehicle, and IELO-related enquiries.",
        "Help with the paperwork you are asked to complete.",
        "No implied partnership terms, prices, or coverage promises.",
      ],
      questions: [
        "Which insurance service are you asking about?",
        "Is this a new enquiry or a renewal-related request?",
        "Do you have vehicle or personal details ready to share in person?",
      ],
      related: ["daman", "vehicle-insurance", "ielo"],
    },
    daman: {
      slug: "daman",
      category: "Insurance Services",
      title: "Daman Services",
      intro:
        "Assistance with Daman-related enquiries as advertised by the centre. Please confirm current availability and the paperwork required for your request.",
      covers: [
        "Help with Daman-related documentation enquiries.",
        "Support preparing information you already have.",
        "Discussion of next steps with the team.",
      ],
      questions: [
        "Is this related to a new Daman enquiry or an existing one?",
        "Which documents have you been asked to provide?",
        "Would you like to visit the centre in Al Sila?",
      ],
      related: ["insurance", "ielo", "vehicle-insurance"],
    },
    "vehicle-insurance": {
      slug: "vehicle-insurance",
      category: "Insurance Services",
      title: "Vehicle Insurance",
      intro:
        "Assistance with vehicle insurance-related enquiries. Coverage, prices, and policy terms are not listed here and should be confirmed with the centre.",
      covers: [
        "Help starting a vehicle insurance-related enquiry.",
        "Support with related typing if needed.",
        "Guidance on what details to bring.",
      ],
      questions: [
        "Is the enquiry for a new policy discussion or a related document?",
        "Do you have vehicle registration details available?",
        "Do you also need driving licence-related typing?",
      ],
      related: ["driving-license", "ielo", "insurance"],
    },
    ielo: {
      slug: "ielo",
      category: "Insurance Services",
      title: "IELO Insurance Services",
      intro:
        "Assistance with IELO insurance services as advertised by the centre. Please ask the team what this enquiry involves for your situation.",
      covers: [
        "A point of contact for IELO-related insurance enquiries.",
        "Help preparing related paperwork.",
        "Confirmation of availability before you proceed.",
      ],
      questions: [
        "What prompted the IELO insurance enquiry?",
        "Do you have related documents with you?",
        "Would you like to combine this with another service visit?",
      ],
      related: ["daman", "insurance", "vehicle-insurance"],
    },
    "driving-license": {
      slug: "driving-license",
      category: "Driving License & Vehicle Services",
      title: "Driving License Services",
      intro:
        "Assistance with driving licence-related enquiries and paperwork, subject to availability. The centre does not issue licences.",
      covers: [
        "Help with driving licence-related typing and documents.",
        "Discussion of related vehicle paperwork.",
        "Clear confirmation of what the centre can assist with.",
      ],
      questions: [
        "Is this a new licence-related enquiry or a renewal?",
        "Have you been given a specific form to complete?",
        "Do you also need vehicle insurance assistance?",
      ],
      related: ["driving-license-typing", "vehicle-insurance", "vehicle-application"],
    },
    "driving-license-typing": {
      slug: "driving-license-typing",
      category: "Driving License & Vehicle Services",
      title: "Driving License-Related Typing",
      intro:
        "Typing support for driving licence-related applications and forms.",
      covers: [
        "Form typing for licence-related paperwork.",
        "Help checking that required fields can be completed from the information you bring.",
        "Optional photocopying or printing, subject to availability.",
      ],
      questions: [
        "Which form needs typing?",
        "Do you have identification documents with you?",
        "Would you like printed copies?",
      ],
      related: ["driving-license", "government-typing", "photocopying"],
    },
    "vehicle-application": {
      slug: "vehicle-application",
      category: "Driving License & Vehicle Services",
      title: "Related Application Assistance",
      intro:
        "Selected vehicle-related application assistance, subject to availability. Please confirm the exact request with the team.",
      covers: [
        "Help with related vehicle paperwork enquiries.",
        "Typing support where the centre currently offers it.",
        "Coordination with insurance-related questions if needed.",
      ],
      questions: [
        "What vehicle-related application are you asking about?",
        "Do you have registration or licence papers to hand?",
        "Is this needed together with insurance assistance?",
      ],
      related: ["driving-license", "vehicle-insurance", "document-clearing"],
    },
    attestation: {
      slug: "attestation",
      category: "Attestation & Documentation",
      title: "Document Attestation",
      intro:
        "Assistance with document attestation enquiries. The centre can help you prepare and discuss paperwork; attestation itself depends on the relevant offices.",
      covers: [
        "Help preparing documents for attestation-related requests.",
        "Discussion of related clearing or typing needs.",
        "Confirmation of applicable charges before you proceed.",
      ],
      questions: [
        "Which documents need attestation-related assistance?",
        "Are the documents issued locally or from another country?",
        "Do you also need copies or translations?",
      ],
      related: ["document-clearing", "legal-translation", "document-preparation"],
    },
    photography: {
      slug: "photography",
      category: "Studio & Printing Services",
      title: "Studio Photography",
      intro:
        "Studio photography services for customers’ needs, including photos that may be required for documentation. Please discuss the type of photograph you need.",
      covers: [
        "Studio photography for everyday and document-related needs.",
        "A chance to confirm size or format requirements.",
        "Related photo printing, subject to availability.",
      ],
      questions: [
        "What is the photograph for?",
        "Have you been given a size or background requirement?",
        "Do you also need printed copies today?",
      ],
      related: ["photo-printing", "passport-renewal", "emirates-id"],
    },
    "photo-printing": {
      slug: "photo-printing",
      category: "Studio & Printing Services",
      title: "Photo Printing",
      intro:
        "Assistance with photo printing and related requirements, including prints that may be needed for official use. Confirm sizes with the team.",
      covers: [
        "Photo printing for selected sizes, subject to confirmation.",
        "Help matching prints to a stated requirement where you have one.",
        "Coordination with studio photography if a new photo is needed.",
      ],
      questions: [
        "Do you already have a digital photo, or do you need a studio sitting?",
        "Which size or quantity has been requested?",
        "Is this for a visa, ID, or another purpose?",
      ],
      related: ["photography", "printing", "photocopying"],
    },
    photocopying: {
      slug: "photocopying",
      category: "Studio & Printing Services",
      title: "Photocopying",
      intro:
        "Photocopying assistance, including A4 and A3 where available. Please confirm paper size and quantity with the centre.",
      covers: [
        "Photocopying of selected documents.",
        "A4 and A3 copies, subject to availability.",
        "Related scanning or printing if offered at the time of your visit.",
      ],
      questions: [
        "How many pages and which size (A4 or A3)?",
        "Do you need colour or black and white?",
        "Is lamination also required?",
      ],
      related: ["printing", "lamination", "document-preparation"],
    },
    printing: {
      slug: "printing",
      category: "Studio & Printing Services",
      title: "Related Printing Services",
      intro:
        "Selected document printing services, including colour printing where available. Please confirm the request before visiting.",
      covers: [
        "Document printing subject to confirmation.",
        "Colour printing where available.",
        "Coordination with photocopying or lamination.",
      ],
      questions: [
        "Are you printing from a file, email, or paper original?",
        "How many copies do you need?",
        "Is colour required?",
      ],
      related: ["photocopying", "photo-printing", "lamination"],
    },
    lamination: {
      slug: "lamination",
      category: "Studio & Printing Services",
      title: "Lamination",
      intro:
        "Lamination of selected documents, as advertised by the centre. Availability and sizes should be confirmed with the team.",
      covers: [
        "Lamination for selected document sizes, subject to availability.",
        "Can be combined with photocopying or printing.",
        "Discussion of what should and should not be laminated.",
      ],
      questions: [
        "Which documents do you want laminated?",
        "What size are they?",
        "Do you need copies made first?",
      ],
      related: ["photocopying", "printing", "document-preparation"],
    },
  };

  window.AlShabana.SERVICES = SERVICES;

  function bindWhatsAppLinks() {
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var key = el.getAttribute("data-wa");
      var custom = el.getAttribute("data-wa-message");
      var message = custom || MESSAGES[key] || MESSAGES.general;
      el.setAttribute("href", whatsappUrl(message));
    });
  }

  function bindMapLinks() {
    document.querySelectorAll("[data-maps='search']").forEach(function (el) {
      el.setAttribute("href", mapsSearchUrl());
    });
    document.querySelectorAll("[data-maps='directions']").forEach(function (el) {
      el.setAttribute("href", mapsDirectionsUrl());
    });
  }

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var panel = document.querySelector(".nav-panel");
    if (!toggle || !panel) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }

    function open() {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      document.body.classList.add("nav-open");
    }

    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") close();
      else open();
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });

    document.addEventListener("click", function (event) {
      if (!panel.classList.contains("is-open")) return;
      if (panel.contains(event.target) || toggle.contains(event.target)) return;
      close();
    });
  }

  function initReveals() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setYear() {
    var nodes = document.querySelectorAll("[data-year]");
    var year = String(new Date().getFullYear());
    nodes.forEach(function (el) {
      el.textContent = year;
    });
  }

  const CATEGORY_MAP = {
    visa: "visa-typing",
    "visa-immigration": "visa-typing",
    "emirates-id": "emirates-id",
    passport: "passport-renewal",
    "passport-identity": "passport-renewal",
    insurance: "daman",
    driving: "driving-license",
    attestation: "attestation",
    studio: "photography",
  };

  function renderServiceDetails() {
    var root = document.getElementById("service-detail-root");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("service") || params.get("category");
    
    // Check aliases
    if (slug && !SERVICES[slug] && CATEGORY_MAP[slug]) {
      slug = CATEGORY_MAP[slug];
    }

    var service = slug ? SERVICES[slug] : SERVICES["visa-typing"];

    if (!service) {
      root.innerHTML =
        '<div class="detail-fallback">' +
        "<span class=\"badge-tag\">Service Catalogue</span>" +
        "<h1>Let’s find the right service.</h1>" +
        "<p>The selected service could not be located. Browse the full directory or message our team with your enquiry.</p>" +
        '<div class="btn-row" style="justify-content: center; margin-top: 1.5rem;">' +
        '<a class="btn btn-primary" href="services.html">View Services Directory</a>' +
        '<a class="btn btn-secondary" data-wa="general" href="https://wa.me/971545143855">WhatsApp Us</a>' +
        "</div></div>";
      bindWhatsAppLinks();
      return;
    }

    var checkIcon = '<svg class="detail-checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    var infoIcon = '<svg class="detail-checklist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

    var relatedHtml = service.related
      .map(function (id) {
        var item = SERVICES[id];
        if (!item) return "";
        return (
          '<a class="detail-sidebar-link" href="service-details.html?service=' +
          encodeURIComponent(item.slug) +
          '"><span>' +
          item.title +
          '</span><span aria-hidden="true">→</span></a>'
        );
      })
      .join("");

    var covers = service.covers
      .map(function (line) {
        return "<li>" + checkIcon + "<span>" + line + "</span></li>";
      })
      .join("");

    var questions = service.questions
      .map(function (line) {
        return "<li>" + infoIcon + "<span>" + line + "</span></li>";
      })
      .join("");

    var enquiryMessage =
      "Hello Al Shabana Typing & Travels, I would like to enquire about " +
      service.title +
      ". Could you please guide me on the requirements and pricing?";

    document.title = service.title + " | Al Shabana Typing & Travels";

    root.innerHTML =
      '<div class="detail-page-header">' +
      '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="index.html">Home</a>' +
      '<span aria-hidden="true">/</span>' +
      '<a href="services.html">Services</a>' +
      '<span aria-hidden="true">/</span>' +
      '<span>' +
      service.title +
      '</span>' +
      '</nav>' +
      '<span class="badge-tag">' +
      service.category +
      '</span>' +
      '<h1 style="margin-top: 0.75rem; margin-bottom: 1rem;">' +
      service.title +
      '</h1>' +
      '<p class="lede" style="max-width: 800px;">' +
      service.intro +
      '</p>' +
      '</div>' +
      '<div class="detail-main-layout">' +
      '<div class="detail-content-col">' +
      '<section class="detail-card">' +
      '<h2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> What This Service Covers</h2>' +
      '<ul class="detail-checklist">' +
      covers +
      '</ul>' +
      '</section>' +
      '<section class="detail-card">' +
      '<h2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Essential Guidelines &amp; Questions</h2>' +
      '<ul class="detail-checklist">' +
      questions +
      '</ul>' +
      '</section>' +
      '<section class="detail-card">' +
      '<h2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> How The Process Works</h2>' +
      '<div class="detail-flow">' +
      '<div class="detail-flow-step"><span class="detail-flow-num">Step 1</span><strong>Prerequisite Review</strong><p>Bring or send your paperwork for review by our experienced staff.</p></div>' +
      '<div class="detail-flow-step"><span class="detail-flow-num">Step 2</span><strong>Accurate Typing</strong><p>Forms are completed meticulously according to current UAE authority standards.</p></div>' +
      '<div class="detail-flow-step"><span class="detail-flow-num">Step 3</span><strong>Receipt &amp; Tracking</strong><p>Receive your submission confirmation and receipt with follow-up guidance.</p></div>' +
      '</div>' +
      '</section>' +
      '</div>' +
      '<aside class="detail-sidebar-col">' +
      '<div class="detail-sidebar-card consultation">' +
      '<h3>Direct Consultation</h3>' +
      '<p>Have questions about prerequisites, required documents, or turnaround time? Message our team directly for immediate assistance.</p>' +
      '<a class="btn btn-whatsapp" style="width: 100%; justify-content: center; margin-bottom: 0.75rem;" href="' +
      whatsappUrl(enquiryMessage) +
      '">Enquire on WhatsApp ↗</a>' +
      '<a class="btn btn-secondary" style="width: 100%; justify-content: center;" href="tel:+971545143855">Call Centre: +971 54 514 3855</a>' +
      '<p style="font-size: 0.8rem; color: var(--slate-500); margin-top: 1rem; margin-bottom: 0;">Located on Al Rukn St, Al Sila. Mon–Sun: 8am–2pm &amp; 5pm–10pm.</p>' +
      '</div>' +
      '<div class="detail-sidebar-card">' +
      '<h3>Related Services</h3>' +
      '<p>Explore related services in this department:</p>' +
      '<div class="detail-sidebar-links">' +
      relatedHtml +
      '</div>' +
      '<div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--slate-200);">' +
      '<a href="services.html" style="font-size: 0.88rem; font-weight: 600; color: var(--blue-primary); display: inline-flex; align-items: center; gap: 0.35rem;">← Back to All Services</a>' +
      '</div>' +
      '</div>' +
      '</aside>' +
      '</div>';
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var errorBox = document.getElementById("form-error");

    function showError(message) {
      if (!errorBox) return;
      errorBox.textContent = message;
      errorBox.hidden = !message;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      showError("");

      var name = (form.elements.namedItem("name").value || "").trim();
      var phone = (form.elements.namedItem("phone").value || "").trim();
      var category = (form.elements.namedItem("category").value || "").trim();
      var message = (form.elements.namedItem("message").value || "").trim();

      if (!name) {
        showError("Please enter your full name.");
        form.elements.namedItem("name").focus();
        return;
      }
      if (!phone || phone.replace(/\D/g, "").length < 8) {
        showError("Please enter a valid phone number.");
        form.elements.namedItem("phone").focus();
        return;
      }
      if (!category) {
        showError("Please choose a service category.");
        form.elements.namedItem("category").focus();
        return;
      }
      if (!message) {
        showError("Please add a short message about what you need.");
        form.elements.namedItem("message").focus();
        return;
      }

      var text =
        "Hello Al Shabana Typing & Travels, I would like to enquire about your services.\n\n" +
        "Name: " +
        name +
        "\nPhone: " +
        phone +
        "\nService category: " +
        category +
        "\nMessage: " +
        message;

      window.open(whatsappUrl(text), "_blank", "noopener");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindWhatsAppLinks();
    bindMapLinks();
    initNav();
    initReveals();
    setYear();
    renderServiceDetails();
    initContactForm();
  });
})();
