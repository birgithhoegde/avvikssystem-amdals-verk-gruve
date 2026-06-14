const STORAGE_KEY = "besoksgruve-avvik-rapportar-v1";
const SETTINGS_KEY = "besoksgruve-avvik-innstillingar-v1";

const AREAS = [
  "Museum/inngang",
  "Bråjordstulen",
  "Konserthall/Sølvsynken",
  "Hoffnung malmgang",
  "Howard malmgang",
  "Johannes malmgang",
  "Crosscut",
  "Ingeborg sjakt",
  "Abel sjakt",
  "Smia",
  "Storheisen",
  "Uteområde",
  "Anna"
];

const KINDS = [
  "Risikoobservasjon",
  "Nestenulukke",
  "Uønska hending",
  "Personskade",
  "Forbetringsforslag"
];

const KIND_HELP = {
  Risikoobservasjon: "Du ser ein fare før noko har skjedd.",
  Nestenulukke: "Det kunne gått gale, men ingen vart skadd.",
  "Uønska hending": "Noko skjedde som ikkje skulle skjedd.",
  Personskade: "Ein person vart skadd eller fekk helseplager.",
  Forbetringsforslag: "Forslag som kan gjere drift eller tryggleik betre."
};

const SEVERITIES = ["låg", "middels", "høg", "akutt"];
const SEVERITY_HELP = {
  låg: "Mindre avvik utan skade eller stor fare.",
  middels: "Kan bli farleg eller krev oppfølging.",
  høg: "Alvorleg fare, skade eller driftsproblem.",
  akutt: "Pågåande fare. Stans aktivitet og varsle straks."
};
const STATUSES = ["aktiv", "under arbeid", "lukka"];
const SHIFTS = [
  "1. smietur",
  "2. smietur",
  "Langturen",
  "Før opning",
  "Etter opning",
  "I opningstid",
  "Utanom sesong"
];

const CONTROL_AREAS = [
  "Strakstiltak",
  "Sikring, sperring eller låsing",
  "Vedlikehald eller reparasjon",
  "Reinhald eller sklisikring",
  "Kontroll eller inspeksjon",
  "Skilting eller informasjon",
  "Opplæring eller rutine",
  "Beredskap eller varsling",
  "Dokumentasjon",
  "Anna"
];

const REPORTER_ROLES = [
  "Hovudguide",
  "Rodeansvarleg",
  "Uteansvarleg",
  "Driftsleiar",
  "Lokalstyret",
  "Andre"
];

const PERSON_CATEGORIES = ["Tilsett", "Guide", "Besøkande", "Leverandør", "Anna"];
const ACTIVITY_STOPPED = ["Nei", "Ja"];
const RISK_PROBABILITIES = ["Låg", "Middels", "Høg"];
const RISK_CONSEQUENCES = ["Låg", "Middels", "Høg", "Kritisk"];
const GUIDE_NOTIFICATION_KINDS = [
  "Risikoobservasjon",
  "Nestenulukke",
  "Uønska hending",
  "Personskade"
];

const RISK_PROBABILITY_SCORE = {
  Låg: 1,
  Middels: 2,
  Høg: 3
};

const RISK_CONSEQUENCE_SCORE = {
  Låg: 1,
  Middels: 2,
  Høg: 3,
  Kritisk: 4
};

const RISK_ITEMS = [
  {
    id: "R1",
    title: "Laus stein eller mindre steinfall frå tak og veggar",
    probability: 2,
    consequence: 5,
    score: 10,
    measure: "Årleg bergteknisk kontroll og løpande inspeksjon",
    responsible: "Driftsansvarleg",
    controlArea: "Kontroll eller inspeksjon",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R2",
    title: "Fall i sjakt eller nivåskilnad",
    probability: 1,
    consequence: 5,
    score: 5,
    measure: "Rekkverk, sperringar og skilting",
    responsible: "Driftsansvarleg",
    controlArea: "Sikring, sperring eller låsing",
    area: "Ingeborg sjakt"
  },
  {
    id: "R3",
    title: "Glatte golv på grunn av vatn/is",
    probability: 3,
    consequence: 3,
    score: 9,
    measure: "Sklisikring, reinhald og informasjon til besøkande",
    responsible: "Guide",
    controlArea: "Reinhald eller sklisikring",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R5",
    title: "Straumbrot under omvising",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Nødlys, lommelykter og evakueringsrutinar",
    responsible: "Teknisk ansvarleg",
    controlArea: "Beredskap eller varsling",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R6",
    title: "Brann i elektrisk anlegg",
    probability: 1,
    consequence: 5,
    score: 5,
    measure: "Årleg elkontroll og brannvernrutinar",
    responsible: "Teknisk ansvarleg",
    controlArea: "Kontroll eller inspeksjon",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R7",
    title: "Besøkande får akutt sjukdom eller skade",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Førstehjelpsutstyr og opplæring av guidar",
    responsible: "Driftsansvarleg",
    controlArea: "Beredskap eller varsling",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R8",
    title: "Besøkande kjem bort frå gruppa",
    probability: 2,
    consequence: 3,
    score: 6,
    measure: "Registrering inn/ut og teljing av deltakarar",
    responsible: "Guide",
    controlArea: "Opplæring eller rutine",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R9",
    title: "Manglande kommunikasjon mellom guidar og drift",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Radiosamband og reserveutstyr",
    responsible: "Driftsansvarleg",
    controlArea: "Beredskap eller varsling",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R10",
    title: "Evakuering vert forseinka",
    probability: 2,
    consequence: 5,
    score: 10,
    measure: "Regelmessige øvingar og oppdaterte rutinar",
    responsible: "Driftsansvarleg",
    controlArea: "Beredskap eller varsling",
    area: "Crosscut"
  },
  {
    id: "R11",
    title: "Besøkande snublar i kablar, skinner eller ujamnt underlag",
    probability: 3,
    consequence: 3,
    score: 9,
    measure: "Merking, vedlikehald og informasjon",
    responsible: "Guide",
    controlArea: "Vedlikehald eller reparasjon",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R12",
    title: "Guide gløymer å låse døra i Crosscut og gruva blir ståande open",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Sperringar, låsing og skilting",
    responsible: "Driftsansvarleg",
    controlArea: "Sikring, sperring eller låsing",
    area: "Crosscut"
  },
  {
    id: "R14",
    title: "Skade på kulturminne eller tekniske installasjonar",
    probability: 2,
    consequence: 2,
    score: 4,
    measure: "Informasjon og tilsyn under omvising",
    responsible: "Guide",
    controlArea: "Skilting eller informasjon",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R15",
    title: "Psykisk reaksjon hos besøkande",
    probability: 2,
    consequence: 3,
    score: 6,
    measure: "Informasjon før tur og moglegheit for å avbryte",
    responsible: "Guide",
    controlArea: "Skilting eller informasjon",
    area: "Konserthall/Sølvsynken"
  },
  {
    id: "R16",
    title: "Fall på trapper eller stigar",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Kontroll, vedlikehald og handlist",
    responsible: "Driftsansvarleg",
    controlArea: "Vedlikehald eller reparasjon",
    area: "Crosscut"
  },
  {
    id: "R17",
    title: "Manglande registrering av besøkande",
    probability: 2,
    consequence: 4,
    score: 8,
    measure: "Fast rutine for inn- og utsjekk",
    responsible: "Guide",
    controlArea: "Opplæring eller rutine",
    area: "Museum/inngang"
  }
];

const MAP_LOCATIONS = [
  { label: "Museum/inngang", x: 6, y: 22, area: "Museum/inngang" },
  { label: "Bråjordstulen", x: 16, y: 24, area: "Bråjordstulen" },
  { label: "Konserthall/Sølvsynken", x: 35, y: 24, area: "Konserthall/Sølvsynken" },
  { label: "Hoffnung malmgang", x: 80, y: 24, area: "Hoffnung malmgang" },
  { label: "Howard malmgang", x: 80, y: 46, area: "Howard malmgang" },
  { label: "Johannes malmgang", x: 80, y: 66, area: "Johannes malmgang" },
  { label: "Ingeborg sjakt", x: 32, y: 46, area: "Ingeborg sjakt" },
  { label: "Abel sjakt", x: 56, y: 66, area: "Abel sjakt" },
  { label: "Smia", x: 49, y: 46, area: "Smia" },
  { label: "Storheisen", x: 54, y: 46, area: "Storheisen" },
  { label: "Crosscut", x: 80, y: 52, area: "Crosscut" }
];

const DEFAULT_SETTINGS = {
  managerName: "Driftsansvarleg",
  managerEmail: "drift@besoksgruva.no",
  extraEmail: "",
  managerPhone: "",
  notifyWebhook: "",
  cloudUrl: "",
  cloudKey: "",
  cloudTable: "avvik_reports",
  autoMail: true
};

const SEVERITY_CLASS = {
  låg: "low",
  middels: "medium",
  høg: "high",
  akutt: "critical"
};

const SEVERITY_RANK = {
  låg: 1,
  middels: 2,
  høg: 3,
  akutt: 4
};

const STATUS_RANK = {
  aktiv: 1,
  "under arbeid": 2,
  lukka: 3
};

const state = {
  reports: [],
  settings: { ...DEFAULT_SETTINGS },
  filter: "aktive",
  search: "",
  editingId: null,
  mapX: null,
  mapY: null,
  mapLabel: "",
  photoDataUrl: "",
  photoName: "",
  photos: [],
  photoTouched: false,
  installPrompt: null,
  serviceWorkerReady: false
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  populateStaticControls();
  loadState();
  bindEvents();
  registerOfflineApp();
  updateNetworkState();
  resetForm();
  render();
}

function cacheElements() {
  [
    "risk-observation-count",
    "open-count",
    "urgent-count",
    "closed-count",
    "sync-label",
    "sync-state",
    "network-state",
    "install-app-button",
    "new-report-button",
    "sync-button",
    "manager-name",
    "manager-email",
    "extra-email",
    "manager-phone",
    "notify-webhook",
    "email-automation-status",
    "test-email-button",
    "cloud-url",
    "cloud-key",
    "cloud-table",
    "auto-mail",
    "form-mode",
    "form-title",
    "cancel-edit-button",
    "report-form",
    "occurred-at",
    "title",
    "description-label",
    "description",
    "potential-consequence",
    "affected-persons",
    "immediate-action",
    "immediate-action-wrap",
    "cause-improvement",
    "cause-note",
    "due-date",
    "activity-stopped-choices",
    "person-count",
    "person-category",
    "area",
    "shift",
    "risk-ref",
    "control-area",
    "risk-preview",
    "reported-by",
    "reporter-role",
    "reporter-role-other-wrap",
    "reporter-role-other",
    "responsible",
    "kind-choices",
    "severity-section",
    "severity-choices",
    "risk-assessment-section",
    "risk-probability-choices",
    "risk-consequence-choices",
    "risk-score-box",
    "risk-score-value",
    "risk-score-text",
    "status",
    "notify-manager",
    "close-note-wrap",
    "close-note",
    "map-point-text",
    "schematic-map",
    "schematic-marker",
    "clear-map-point-button",
    "photo",
    "photo-preview",
    "photo-preview-list",
    "remove-photo-button",
    "form-notice",
    "form-error",
    "save-button",
    "reset-button",
    "storage-status",
    "export-arcgis-button",
    "export-csv-button",
    "export-json-button",
    "search",
    "responsible-total",
    "responsible-list",
    "report-list",
    "import-json",
    "clear-all-button"
  ].forEach((id) => {
    els[toCamel(id)] = document.getElementById(id);
  });

}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function populateStaticControls() {
  populateSelect(els.area, AREAS);
  populateSelect(els.shift, SHIFTS);
  populateSelect(els.status, STATUSES);
  populateSelect(els.controlArea, CONTROL_AREAS);
  populateSelect(els.reporterRole, REPORTER_ROLES);
  populateSelect(els.personCategory, PERSON_CATEGORIES);
  populateRiskSelect();
  populateChoices(els.kindChoices, "kind", KINDS, "Risikoobservasjon");
  populateChoices(els.severityChoices, "severity", SEVERITIES, "middels");
}

function populateSelect(select, options) {
  select.innerHTML = options
    .map((option) => `<option value="${escapeAttribute(option)}">${escapeHtml(option)}</option>`)
    .join("");
}

function optionsHtml(options, selectedValue) {
  return options
    .map((option) => {
      const selected = option === selectedValue ? "selected" : "";
      return `<option value="${escapeAttribute(option)}" ${selected}>${escapeHtml(option)}</option>`;
    })
    .join("");
}

function setSelectValue(select, value, fallback) {
  const nextValue = select === els.area ? normalizeAreaValue(value) : value;
  select.value = nextValue || fallback;

  if (select.value !== (nextValue || fallback)) {
    select.value = fallback;
  }
}

function normalizeAreaValue(area) {
  if (area === "Konserthall") {
    return "Konserthall/Sølvsynken";
  }

  if (area === "Hovudstoll" || area === "Sidegang" || area === "Tverrslag") {
    return "Konserthall/Sølvsynken";
  }

  return area;
}

function populateChoices(container, name, options, selectedValue) {
  container.innerHTML = options
    .map((option) => {
      const extraClass =
        name === "severity" ? ` severity-${SEVERITY_CLASS[option]}` : "";
      const checked = option === selectedValue ? "checked" : "";
      const help =
        name === "kind"
          ? KIND_HELP[option]
          : name === "severity"
            ? SEVERITY_HELP[option]
            : "";

      return `
        <label class="choice${extraClass}">
          <input type="radio" name="${name}" value="${escapeAttribute(option)}" ${checked} />
          <span>${escapeHtml(option)}</span>
          ${help ? `<small>${escapeHtml(help)}</small>` : ""}
        </label>
      `;
    })
    .join("");

  updateChoiceStyles(container);
}

function populateRiskSelect() {
  els.riskRef.innerHTML = [
    '<option value="">Ikkje knytt til risikopunkt</option>',
    ...RISK_ITEMS.map(
      (risk) =>
        `<option value="${escapeAttribute(risk.id)}">${escapeHtml(
          `${risk.id}: ${risk.title}`
        )}</option>`
    )
  ].join("");
}

function loadState() {
  try {
    const storedReports = localStorage.getItem(STORAGE_KEY);

    if (storedReports) {
      const parsedReports = JSON.parse(storedReports);

      if (Array.isArray(parsedReports)) {
        state.reports = sortReports(parsedReports);
      }
    }
  } catch {
    setStorageStatus("Klarte ikkje lese lokal avviksliste");
  }

  try {
    const storedSettings = localStorage.getItem(SETTINGS_KEY);

    if (storedSettings) {
      state.settings = {
        ...DEFAULT_SETTINGS,
        ...JSON.parse(storedSettings)
      };
    }
  } catch {
    state.settings = { ...DEFAULT_SETTINGS };
  }

  applySettingsToInputs();
}

function bindEvents() {
  els.reportForm.addEventListener("submit", saveReport);
  els.newReportButton.addEventListener("click", () => {
    resetForm();
    scrollToForm();
  });
  els.cancelEditButton.addEventListener("click", resetForm);
  els.resetButton.addEventListener("click", resetForm);
  els.status.addEventListener("change", updateCloseNoteVisibility);
  els.reporterRole.addEventListener("change", updateReporterRoleOtherVisibility);
  els.riskRef.addEventListener("change", applyRiskSelection);
  els.schematicMap.addEventListener("click", handleMapClick);
  els.schematicMap.addEventListener("keydown", handleMapKeydown);
  els.clearMapPointButton.addEventListener("click", clearMapPoint);
  els.photo.addEventListener("change", handlePhotoChange);
  els.removePhotoButton.addEventListener("click", clearPhoto);
  els.exportArcgisButton.addEventListener("click", exportArcgisGeoJson);
  els.exportCsvButton.addEventListener("click", exportCsv);
  els.exportJsonButton.addEventListener("click", exportJson);
  els.importJson.addEventListener("change", importJson);
  els.clearAllButton.addEventListener("click", clearLocalData);
  els.syncButton.addEventListener("click", () => syncFromCloud(false));
  els.installAppButton.addEventListener("click", installApp);
  els.testEmailButton.addEventListener("click", sendTestEmail);
  els.search.addEventListener("input", () => {
    state.search = els.search.value;
    renderList();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document
        .querySelectorAll("[data-filter]")
        .forEach((item) => item.classList.toggle("is-active", item === button));
      renderList();
    });
  });

  [els.kindChoices, els.severityChoices].forEach((container) => {
    container.addEventListener("change", () => updateChoiceStyles(container));
  });

  els.kindChoices.addEventListener("change", updateDynamicForm);

  [
    els.managerName,
    els.managerEmail,
    els.extraEmail,
    els.managerPhone,
    els.notifyWebhook,
    els.cloudUrl,
    els.cloudKey,
    els.cloudTable,
    els.autoMail
  ].forEach((input) => {
    input.addEventListener("input", saveSettingsFromInputs);
    input.addEventListener("change", saveSettingsFromInputs);
  });

  els.reportList.addEventListener("click", handleReportAction);
  els.reportList.addEventListener("submit", handleFollowUpSubmit);
  window.addEventListener("online", () => {
    updateNetworkState();

    if (hasCloudConfig()) {
      syncFromCloud(true);
    }
  });
  window.addEventListener("offline", updateNetworkState);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
    els.installAppButton.hidden = false;
  });
  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    els.installAppButton.hidden = true;
    setStorageStatus("Appen er installert");
  });
}

async function registerOfflineApp() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    state.serviceWorkerReady = false;
    updateNetworkState();
    return;
  }

  try {
    await navigator.serviceWorker.register("./sw.js");
    await navigator.serviceWorker.ready;
    state.serviceWorkerReady = true;
    updateNetworkState();
  } catch {
    state.serviceWorkerReady = false;
    setStorageStatus("Offline-cache er ikkje tilgjengeleg");
    updateNetworkState();
  }
}

async function installApp() {
  if (!state.installPrompt) {
    els.installAppButton.hidden = true;
    return;
  }

  const promptEvent = state.installPrompt;
  state.installPrompt = null;
  await promptEvent.prompt();
  const choice = await promptEvent.userChoice;

  if (choice.outcome === "accepted") {
    els.installAppButton.hidden = true;
    setStorageStatus("Appen er installert");
  } else {
    els.installAppButton.hidden = false;
  }
}

function updateNetworkState() {
  if (!els.networkState) {
    return;
  }

  if (!isOnline()) {
    els.networkState.textContent = "Offline";
  } else if (window.location.protocol === "file:") {
    els.networkState.textContent = "Fil";
  } else if (state.serviceWorkerReady) {
    els.networkState.textContent = "Offline klar";
  } else {
    els.networkState.textContent = "På nett";
  }

  updateEmailAutomationStatus();
  renderSyncState();
}

function applySettingsToInputs() {
  els.managerName.value = state.settings.managerName;
  els.managerEmail.value = state.settings.managerEmail;
  els.extraEmail.value = state.settings.extraEmail || "";
  els.managerPhone.value = state.settings.managerPhone;
  els.notifyWebhook.value = state.settings.notifyWebhook;
  els.cloudUrl.value = state.settings.cloudUrl;
  els.cloudKey.value = state.settings.cloudKey;
  els.cloudTable.value = state.settings.cloudTable;
  els.autoMail.checked = Boolean(state.settings.autoMail);
  updateEmailAutomationStatus();
}

function saveSettingsFromInputs() {
  state.settings = {
    managerName: els.managerName.value.trim(),
    managerEmail: els.managerEmail.value.trim(),
    extraEmail: els.extraEmail.value.trim(),
    managerPhone: els.managerPhone.value.trim(),
    notifyWebhook: els.notifyWebhook.value.trim(),
    cloudUrl: els.cloudUrl.value.trim(),
    cloudKey: els.cloudKey.value.trim(),
    cloudTable: els.cloudTable.value.trim() || DEFAULT_SETTINGS.cloudTable,
    autoMail: true
  };

  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  updateEmailAutomationStatus();
  renderSyncState();
}

function updateEmailAutomationStatus() {
  if (!els.emailAutomationStatus) {
    return;
  }

  if (!state.settings.notifyWebhook) {
    els.emailAutomationStatus.textContent = "E-postutkast blir opna automatisk";
    els.emailAutomationStatus.dataset.state = "missing";
    return;
  }

  if (!isOnline()) {
    els.emailAutomationStatus.textContent = "Automatisk e-post ventar på nett";
    els.emailAutomationStatus.dataset.state = "offline";
    return;
  }

  els.emailAutomationStatus.textContent = "Automatisk e-post er aktiv";
  els.emailAutomationStatus.dataset.state = "ready";
}

function updateChoiceStyles(container) {
  container.querySelectorAll(".choice").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("is-selected", Boolean(input && input.checked));
  });
}

function selectedRadio(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const value = selected ? selected.value : "";
  return name === "kind" ? normalizeKindValue(value) : value;
}

function setSelectedRadio(name, value) {
  const nextValue = name === "kind" ? normalizeKindValue(value) : value;
  const target = document.querySelector(`input[name="${name}"][value="${cssEscape(nextValue)}"]`);

  if (target) {
    target.checked = true;
    updateChoiceStyles(target.closest(".choice-grid"));
  }
}

function normalizeKindValue(value) {
  const fallback = "Risikoobservasjon";
  const map = {
    "uønska hending": "Uønska hending",
    nestenulukke: "Nestenulukke",
    "fare/risiko": "Risikoobservasjon",
    "teknisk feil": "Uønska hending",
    publikumsavvik: "Uønska hending",
    "miljø/orden": "Uønska hending",
    "Materiell skade": "Uønska hending",
    "Brot på rutine eller instruks": "Uønska hending",
    Anna: "Uønska hending",
    anna: "Uønska hending"
  };
  const normalized = map[value] || value;
  return KINDS.includes(normalized) ? normalized : fallback;
}

function updateDynamicForm() {
  const kind = selectedRadio("kind");
  const isImprovement = kind === "Forbetringsforslag";

  els.descriptionLabel.textContent =
    kind === "Risikoobservasjon"
      ? "Kva observerte du?"
      : "Kva har skjedd?";

  els.severitySection.hidden = isImprovement;
  els.immediateActionWrap.hidden = isImprovement;
}

function updateRiskScore() {
  const score = calculatedRiskScoreFromInputs();
  const level = riskLevelFromScore(score);
  const label =
    level === "high"
      ? "Raud = høg risiko"
      : level === "moderate"
        ? "Gul = moderat risiko"
        : "Grøn = låg risiko";

  els.riskScoreValue.textContent = String(score);
  els.riskScoreText.textContent = label;
  els.riskScoreBox.classList.toggle("risk-score--low", level === "low");
  els.riskScoreBox.classList.toggle("risk-score--moderate", level === "moderate");
  els.riskScoreBox.classList.toggle("risk-score--high", level === "high");
}

function calculatedRiskScoreFromInputs() {
  const probability = selectedRadio("riskProbability") || "Låg";
  const consequence = selectedRadio("riskConsequence") || "Låg";
  return riskScore(probability, consequence);
}

function riskScore(probability, consequence) {
  return (RISK_PROBABILITY_SCORE[probability] || 1) * (RISK_CONSEQUENCE_SCORE[consequence] || 1);
}

function riskLevelFromScore(score) {
  if (score >= 8) {
    return "high";
  }

  if (score >= 4) {
    return "moderate";
  }

  return "low";
}

function applyRiskSelection() {
  const risk = riskById(els.riskRef.value);

  if (!risk) {
    els.riskPreview.hidden = true;
    els.riskPreview.innerHTML = "";
    return;
  }

  if (!els.title.value.trim()) {
    els.title.value = risk.title;
  }

  if (!els.immediateAction.value.trim()) {
    els.immediateAction.value = risk.measure;
  }

  els.responsible.value = risk.responsible;
  setSelectValue(els.controlArea, risk.controlArea, CONTROL_AREAS[0]);
  setSelectValue(els.area, risk.area, AREAS[0]);
  setSelectedRadio("kind", "Risikoobservasjon");
  setSelectedRadio("severity", severityFromRiskScore(risk.score));
  setSelectedRadio("riskProbability", riskProbabilityFromNumber(risk.probability));
  setSelectedRadio("riskConsequence", riskConsequenceFromNumber(risk.consequence));
  updateRiskScore();
  updateDynamicForm();
  els.riskPreview.hidden = false;
  els.riskPreview.innerHTML = `
    <strong>${escapeHtml(risk.title)}</strong>
    <span>S ${risk.probability} · K ${risk.consequence} · risiko ${risk.score}</span>
    <p>${escapeHtml(risk.measure)}</p>
  `;
}

function riskById(id) {
  return RISK_ITEMS.find((risk) => risk.id === id);
}

function updateRiskPreviewFromReport(report) {
  if (!report.riskTitle) {
    els.riskPreview.hidden = true;
    els.riskPreview.innerHTML = "";
    return;
  }

  els.riskPreview.hidden = false;
  els.riskPreview.innerHTML = `
    <strong>${escapeHtml(report.riskTitle)}</strong>
    <span>S ${report.riskProbability || "-"} · K ${report.riskConsequence || "-"} · risiko ${
      report.riskScore || "-"
    }</span>
    <p>${escapeHtml(report.riskMeasure || "")}</p>
  `;
}

function severityFromRiskScore(score) {
  if (score >= 16) {
    return "akutt";
  }

  if (score >= 10) {
    return "høg";
  }

  if (score >= 5) {
    return "middels";
  }

  return "låg";
}

function riskProbabilityFromNumber(value) {
  if (value >= 4) {
    return "Høg";
  }

  if (value >= 3) {
    return "Middels";
  }

  return "Låg";
}

function riskConsequenceFromNumber(value) {
  if (value >= 5) {
    return "Kritisk";
  }

  if (value >= 4) {
    return "Høg";
  }

  if (value >= 3) {
    return "Middels";
  }

  return "Låg";
}

function resetForm() {
  state.editingId = null;
  state.mapX = null;
  state.mapY = null;
  state.mapLabel = "";
  clearPhoto(false);

  els.formMode.textContent = "Ny sak";
  els.formTitle.textContent = "Meld hending, risiko eller forbetringsforslag";
  els.cancelEditButton.hidden = true;
  els.reportForm.reset();
  els.occurredAt.value = toDateTimeLocalValue(new Date().toISOString());
  setSelectValue(els.area, "Museum/inngang", AREAS[0]);
  setSelectValue(els.shift, "1. smietur", SHIFTS[0]);
  els.riskRef.value = "";
  setSelectValue(els.controlArea, "Strakstiltak", CONTROL_AREAS[0]);
  els.riskPreview.hidden = true;
  els.riskPreview.innerHTML = "";
  els.affectedPersons.value = "";
  els.potentialConsequence.value = "";
  els.causeImprovement.value = "";
  els.causeNote.value = "";
  els.dueDate.value = "";
  els.personCount.value = "0";
  setSelectValue(els.personCategory, "Guide", PERSON_CATEGORIES[0]);
  setSelectValue(els.reporterRole, "Hovudguide", REPORTER_ROLES[0]);
  els.reporterRoleOther.value = "";
  els.responsible.value = state.settings.managerName || "Driftsansvarleg";
  els.status.value = "aktiv";
  els.notifyManager.checked = true;
  setSelectedRadio("kind", "Risikoobservasjon");
  setSelectedRadio("severity", "middels");
  updateMapPoint();
  updateCloseNoteVisibility();
  updateReporterRoleOtherVisibility();
  updateDynamicForm();
  clearFormMessage();
}

function updateCloseNoteVisibility() {
  els.closeNoteWrap.hidden = els.status.value !== "lukka";
}

function updateReporterRoleOtherVisibility() {
  const isOther = els.reporterRole.value === "Andre";
  els.reporterRoleOtherWrap.hidden = !isOther;

  if (!isOther) {
    els.reporterRoleOther.value = "";
  }
}

function handleMapClick(event) {
  const rect = els.schematicMap.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  setMapPoint(x, y);
}

function handleMapKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  setMapPoint(50, 50);
}

function setMapPoint(x, y) {
  const clampedX = Math.max(0, Math.min(100, x));
  const clampedY = Math.max(0, Math.min(100, y));
  const nearest = nearestMapLocation(clampedX, clampedY);

  state.mapX = Number(clampedX.toFixed(1));
  state.mapY = Number(clampedY.toFixed(1));
  state.mapLabel = nearest.label;
  setSelectValue(els.area, nearest.area, AREAS[0]);
  updateMapPoint();
}

function clearMapPoint() {
  state.mapX = null;
  state.mapY = null;
  state.mapLabel = "";
  updateMapPoint();
}

function updateMapPoint() {
  if (typeof state.mapX === "number" && typeof state.mapY === "number") {
    els.mapPointText.textContent = state.mapLabel;
    els.schematicMarker.hidden = false;
    els.schematicMarker.style.left = `${state.mapX}%`;
    els.schematicMarker.style.top = `${state.mapY}%`;
    return;
  }

  els.mapPointText.textContent = "ikkje sett";
  els.schematicMarker.hidden = true;
  els.schematicMarker.style.left = "";
  els.schematicMarker.style.top = "";
}

function nearestMapLocation(x, y) {
  return MAP_LOCATIONS.reduce((nearest, location) => {
    const distance = Math.hypot(location.x - x, location.y - y);

    if (!nearest || distance < nearest.distance) {
      return { ...location, distance };
    }

    return nearest;
  }, null);
}

async function handlePhotoChange(event) {
  const files = Array.from(event.target.files || []).filter((file) =>
    file.type.startsWith("image/")
  );

  if (files.length === 0) {
    return;
  }

  showNotice(files.length === 1 ? "Klargjer bilete ..." : `Klargjer ${files.length} bilete ...`);

  try {
    const preparedPhotos = await Promise.all(
      files.map(async (file) => {
        const prepared = await preparePhoto(file);
        return {
          id: createId(),
          name: file.name,
          dataUrl: prepared.dataUrl
        };
      })
    );

    state.photos = [...state.photos, ...preparedPhotos];
    state.photoDataUrl = state.photos[0] ? state.photos[0].dataUrl : "";
    state.photoName = state.photos[0] ? state.photos[0].name : "";
    state.photoTouched = true;
    renderPhotoPreview();
    els.photo.value = "";
    showNotice(state.photos.length === 1 ? "Bilete klart" : `${state.photos.length} bilete klare`);
  } catch {
    showError("Eitt eller fleire bilete kunne ikkje lesast.");
  }
}

function preparePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const dataUrl = String(reader.result);

      if (!file.type.startsWith("image/")) {
        resolve({ dataUrl });
        return;
      }

      const image = new Image();
      image.onerror = () => resolve({ dataUrl });
      image.onload = () => {
        const maxSide = 1200;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        if (!context) {
          resolve({ dataUrl });
          return;
        }

        context.drawImage(image, 0, 0, width, height);
        resolve({ dataUrl: canvas.toDataURL("image/jpeg", 0.76) });
      };
      image.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

function clearPhoto(markTouched = true) {
  state.photoDataUrl = "";
  state.photoName = "";
  state.photos = [];
  state.photoTouched = markTouched;
  els.photo.value = "";
  renderPhotoPreview();
}

function renderPhotoPreview() {
  const photos = normalizePhotoList(state.photos);

  els.photoPreview.hidden = photos.length === 0;
  els.photoPreviewList.innerHTML = photos
    .map(
      (photo) => `
        <figure>
          <img src="${escapeAttribute(photo.dataUrl)}" alt="${escapeAttribute(
            photo.name || "Avviksbilete"
          )}" />
          <figcaption>${escapeHtml(photo.name || "Bilete")}</figcaption>
        </figure>
      `
    )
    .join("");
}

async function saveReport(event) {
  event.preventDefault();
  clearFormMessage();

  if (!els.occurredAt.value) {
    showError("Legg inn dato og klokkeslett for hendinga.");
    return;
  }

  if (!els.description.value.trim()) {
    showError("Skriv ei kort skildring.");
    return;
  }

  if (!els.reportedBy.value.trim()) {
    showError("Skriv namn på den som melder.");
    return;
  }

  const now = new Date().toISOString();
  const existing = state.reports.find((report) => report.id === state.editingId);
  const isClosing = els.status.value === "lukka";
  const selectedRisk = riskById(els.riskRef.value);
  const kind = selectedRadio("kind");
  const isImprovement = kind === "Forbetringsforslag";
  const title = els.title.value.trim() || createTitleFromDescription(kind, els.description.value);
  const savedPhotos = state.photoTouched
    ? normalizePhotoList(state.photos)
    : existing
      ? normalizeReportPhotos(existing)
      : normalizePhotoList(state.photos);
  const primaryPhoto = savedPhotos[0] || null;

  const report = {
    id: existing ? existing.id : createId(),
    title,
    description: els.description.value.trim(),
    potentialConsequence: els.potentialConsequence.value.trim(),
    immediateAction: els.immediateAction.value.trim(),
    causeNote: els.causeNote.value.trim(),
    causeImprovement: els.causeImprovement.value.trim(),
    affectedPersons: els.affectedPersons.value.trim(),
    dueDate: els.dueDate.value,
    activityStopped: "",
    personCount: Number.parseInt(els.personCount.value, 10) || 0,
    personCategory: els.personCategory.value,
    area: normalizeAreaValue(els.area.value),
    shift: els.shift.value,
    occurredAt: new Date(els.occurredAt.value).toISOString(),
    riskId: selectedRisk ? selectedRisk.id : "",
    riskTitle: selectedRisk ? selectedRisk.title : "",
    riskProbability: selectedRisk ? selectedRisk.probability : null,
    riskConsequence: selectedRisk ? selectedRisk.consequence : null,
    riskScore: selectedRisk ? selectedRisk.score : null,
    riskMeasure: selectedRisk ? selectedRisk.measure : "",
    controlArea: els.controlArea.value,
    reportedBy: els.reportedBy.value.trim(),
    reporterRole: els.reporterRole.value,
    reporterRoleOther: els.reporterRoleOther.value.trim(),
    responsible: els.responsible.value.trim(),
    kind,
    severity: isImprovement ? "låg" : selectedRadio("severity"),
    computedRiskScore: null,
    computedRiskLevel: "",
    status: els.status.value,
    mapX: typeof state.mapX === "number" ? state.mapX : null,
    mapY: typeof state.mapY === "number" ? state.mapY : null,
    mapLabel: state.mapLabel || normalizeAreaValue(els.area.value),
    createdAt: existing ? existing.createdAt : now,
    updatedAt: now,
    closedAt: isClosing ? (existing && existing.closedAt ? existing.closedAt : now) : null,
    closeNote: isClosing ? els.closeNote.value.trim() : "",
    photos: savedPhotos,
    photoDataUrl: primaryPhoto ? primaryPhoto.dataUrl : "",
    photoName: primaryPhoto ? primaryPhoto.name : "",
    notificationStatus: existing ? existing.notificationStatus : "ikkje sendt",
    notificationMessage: existing ? existing.notificationMessage : "",
    notificationSentAt: existing ? existing.notificationSentAt : "",
    followUps: existing ? normalizeFollowUps(existing.followUps) : []
  };

  await persistReport(report);

  if (!existing && els.notifyManager.checked && report.status !== "lukka") {
    await sendNotification(report, true, "registrering");
  }

  resetForm();
  showNotice("Avvik lagra");
}

function createId() {
  if (crypto && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `avvik-${Date.now()}`;
}

function createTitleFromDescription(kind, description) {
  const text = description.trim().replace(/\s+/g, " ");
  const shortText = text.length > 54 ? `${text.slice(0, 54).trim()}...` : text;
  return shortText ? `${kind}: ${shortText}` : kind;
}

async function persistReport(report, skipCloud = false) {
  state.reports = sortReports([
    report,
    ...state.reports.filter((item) => item.id !== report.id)
  ]);
  saveReports();
  render();

  if (!skipCloud && hasCloudConfig()) {
    if (!isOnline()) {
      setStorageStatus("Offline: avvik lagra lokalt");
      return;
    }

    try {
      await saveCloudReport(report);
      setStorageStatus("Felleslista er oppdatert");
    } catch (error) {
      setStorageStatus(error.message || "Felles lagring feila");
    }
  }
}

function saveReports() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.reports));
}

function sortReports(reports) {
  return [...reports].sort((a, b) => {
    if (a.status !== b.status) {
      return STATUS_RANK[a.status] - STATUS_RANK[b.status];
    }

    if (a.severity !== b.severity) {
      return SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
    }

    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

function render() {
  renderStats();
  renderSyncState();
  renderResponsibleSummary();
  renderList();
}

function renderStats() {
  const active = state.reports.filter((report) => report.status !== "lukka");
  const urgent = active.filter(
    (report) => report.severity === "høg" || report.severity === "akutt"
  );
  const riskObservations = state.reports.filter(
    (report) => normalizeKindValue(report.kind) === "Risikoobservasjon"
  );
  const closed = state.reports.filter((report) => report.status === "lukka");

  els.openCount.textContent = String(active.length);
  els.urgentCount.textContent = String(urgent.length);
  els.riskObservationCount.textContent = String(riskObservations.length);
  els.closedCount.textContent = String(closed.length);
}

function renderResponsibleSummary() {
  const groups = responsibleGroups(state.reports);

  els.responsibleTotal.textContent =
    state.reports.length === 1 ? "1 avvik" : `${state.reports.length} avvik`;

  if (groups.length === 0) {
    els.responsibleList.innerHTML =
      '<p class="empty-state">Ingen ansvarlege å vise enno.</p>';
    return;
  }

  const maxTotal = Math.max(...groups.map((group) => group.total), 1);

  els.responsibleList.innerHTML = groups
    .map((group) => {
      const width = Math.max(8, Math.round((group.total / maxTotal) * 100));

      return `
        <article class="responsible-row">
          <div class="responsible-row-main">
            <strong>${escapeHtml(group.name)}</strong>
            <span>${group.total} totalt</span>
          </div>
          <div class="responsible-counts">
            <span>${group.active} aktive</span>
            <span>${group.critical} høg/akutt</span>
            <span>${group.closed} lukka</span>
          </div>
          <div class="responsible-bar" aria-hidden="true">
            <span style="width: ${width}%"></span>
          </div>
        </article>
      `;
    })
    .join("");
}

function responsibleGroups(reports) {
  const groups = new Map();

  reports.forEach((report) => {
    const name = responsibleName(report);
    const key = responsibleKey(name);
    const existing =
      groups.get(key) ||
      {
        name,
        total: 0,
        active: 0,
        closed: 0,
        critical: 0
      };

    existing.total += 1;

    if (report.status === "lukka") {
      existing.closed += 1;
    } else {
      existing.active += 1;
    }

    if (
      report.status !== "lukka" &&
      (report.severity === "høg" || report.severity === "akutt")
    ) {
      existing.critical += 1;
    }

    groups.set(key, existing);
  });

  return [...groups.values()].sort((a, b) => {
    if (b.active !== a.active) {
      return b.active - a.active;
    }

    if (b.critical !== a.critical) {
      return b.critical - a.critical;
    }

    if (b.total !== a.total) {
      return b.total - a.total;
    }

    return a.name.localeCompare(b.name, "nn");
  });
}

function responsibleName(report) {
  return report.responsible && report.responsible.trim()
    ? report.responsible.trim()
    : "Ikkje sett";
}

function reporterRoleText(report) {
  const role = normalizeReporterRole(report.reporterRole);

  if (!role) {
    return "";
  }

  if (role === "Andre" && report.reporterRoleOther) {
    return `${role}: ${report.reporterRoleOther}`;
  }

  return role;
}

function normalizeReporterRole(role) {
  if (role === "Driftsansvarleg") {
    return "Driftsleiar";
  }

  return REPORTER_ROLES.includes(role) ? role : "";
}

function responsibleKey(name) {
  return name.trim().toLowerCase();
}

function renderSyncState() {
  const hasCloud = hasCloudConfig();
  els.syncLabel.textContent = hasCloud ? "Felleslagring" : "Lagring";
  els.syncState.textContent = hasCloud ? (isOnline() ? "På" : "Vent") : "Lokal";
  els.syncButton.disabled = !hasCloud || !isOnline();
}

function renderList() {
  const visibleReports = getVisibleReports();

  if (visibleReports.length === 0) {
    els.reportList.innerHTML = `<p class="empty-state">Ingen avvik i denne visinga.</p>`;
    return;
  }

  els.reportList.innerHTML = visibleReports.map(renderReport).join("");
}

function getVisibleReports() {
  const needle = state.search.trim().toLowerCase();

  return sortReports(state.reports)
    .filter((report) => {
      if (state.filter === "aktive") {
        return report.status !== "lukka";
      }

      if (state.filter === "lukka") {
        return report.status === "lukka";
      }

      return true;
    })
    .filter((report) => {
      if (!needle) {
        return true;
      }

      return [
        report.title,
        report.description,
        report.immediateAction,
        report.causeImprovement,
        report.affectedPersons,
        report.area,
        report.kind,
        report.reportedBy,
        report.reporterRole,
        report.reporterRoleOther,
        report.responsible
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
}

function renderReport(report) {
  const kind = normalizeKindValue(report.kind);
  const severityClass = SEVERITY_CLASS[report.severity] || "medium";
  const statusClass = report.status.replaceAll(" ", "-");
  const severityBadge =
    kind === "Forbetringsforslag"
      ? ""
      : `<span class="severity-badge ${severityClass}">${escapeHtml(report.severity)}</span>`;
  const followUps = normalizeFollowUps(report.followUps);
  const eventDate = report.occurredAt || report.createdAt;
  const reporterRole = reporterRoleText(report);
  const photos = normalizeReportPhotos(report);
  const photo = renderReportPhotos(photos, report.title);
  const actionButton =
    report.status === "aktiv"
      ? `<button type="button" class="secondary-button" data-action="start" data-id="${report.id}">Start arbeid</button>`
      : "";
  const closeButton =
    report.status !== "lukka"
      ? `<button type="button" class="secondary-button" data-action="close" data-id="${report.id}">Lukk</button>`
      : `<button type="button" class="secondary-button" data-action="reopen" data-id="${report.id}">Opne att</button>`;
  const immediateAction = report.immediateAction
    ? `<p><strong>Strakstiltak:</strong> ${escapeHtml(report.immediateAction)}</p>`
    : "";
  const causeNote = report.causeNote
    ? `<p><strong>Årsak:</strong> ${escapeHtml(report.causeNote)}</p>`
    : "";
  const causeImprovement = report.causeImprovement
    ? `<p><strong>Forslag til tiltak:</strong> ${escapeHtml(report.causeImprovement)}</p>`
    : "";
  const closeNote = report.closeNote
    ? `<p><strong>Lukka:</strong> ${escapeHtml(report.closeNote)}</p>`
    : "";
  const notification = report.notificationMessage
    ? `<p class="notification-note">${escapeHtml(report.notificationMessage)}${
        report.mailto
          ? `<br><a href="${escapeAttribute(report.mailto)}">Opne e-postutkast</a>`
          : ""
      }</p>`
    : "";
  const risk = report.riskTitle
    ? `<p><strong>Risikopunkt:</strong> ${escapeHtml(report.riskTitle)}${
        report.riskScore ? ` (risiko ${report.riskScore})` : ""
      }</p>`
    : "";
  const followUpHtml = renderFollowUps(followUps);

  return `
    <article class="report-item report-item--${statusClass}">
      <div class="report-main">
        <div>
          <div class="badge-row">
            ${severityBadge}
            <span class="status-badge status-${statusClass}">${escapeHtml(report.status)}</span>
            <span class="meta-badge">${escapeHtml(report.area)}</span>
          </div>
          <h3>${escapeHtml(report.title)}</h3>
          <p class="report-meta">${escapeHtml(kind)} · ${formatDate(eventDate)}</p>
        </div>
        <div class="report-actions">
          ${actionButton}
          ${closeButton}
          <button type="button" class="ghost-button" data-action="edit" data-id="${report.id}">Rediger</button>
        </div>
      </div>

      <div class="report-body">
        <p>${escapeHtml(report.description)}</p>
        ${risk}
        ${immediateAction}
        ${causeNote}
        ${causeImprovement}
        ${closeNote}
      </div>

      ${photo}

      <dl class="report-details">
        <div>
          <dt>Dato/tid</dt>
          <dd>${formatDate(eventDate)}</dd>
        </div>
        <div>
          <dt>Meldt av</dt>
          <dd>${escapeHtml(
            [report.reportedBy || "ikkje sett", reporterRole].filter(Boolean).join(" · ")
          )}</dd>
        </div>
        <div>
          <dt>Ansvarleg</dt>
          <dd>${escapeHtml(report.responsible || "ikkje sett")}</dd>
        </div>
        <div>
          <dt>Frist</dt>
          <dd>${escapeHtml(report.dueDate || "ikkje sett")}</dd>
        </div>
        <div>
          <dt>Type tiltak</dt>
          <dd>${escapeHtml(report.controlArea || "ikkje sett")}</dd>
        </div>
        <div>
          <dt>Varsling</dt>
          <dd>${escapeHtml(report.notificationStatus || "ikkje sendt")}</dd>
        </div>
        <div>
          <dt>Oppdatert</dt>
          <dd>${formatDate(report.updatedAt)}</dd>
        </div>
      </dl>

      ${notification}

      <details class="case-followup-details">
        <summary>Oppfølging (driftsansvarleg)</summary>
        <form class="case-followup-form" data-id="${report.id}">
          <div class="form-row">
            <label>
              <span>Ansvarleg</span>
              <input name="responsible" value="${escapeAttribute(report.responsible || "")}" />
            </label>
            <label>
              <span>Status</span>
              <select name="status">${optionsHtml(STATUSES, report.status || "aktiv")}</select>
            </label>
          </div>
          <div class="form-row">
            <label>
              <span>Frist</span>
              <input name="dueDate" type="date" value="${escapeAttribute(report.dueDate || "")}" />
            </label>
            <label>
              <span>Type tiltak</span>
              <select name="controlArea">${optionsHtml(
                CONTROL_AREAS,
                report.controlArea || "Strakstiltak"
              )}</select>
            </label>
          </div>
          <label>
            <span>Strakstiltak</span>
            <textarea name="immediateAction" rows="3">${escapeHtml(
              report.immediateAction || ""
            )}</textarea>
          </label>
          <label>
            <span>Kommentar til oppstart/oppfølging</span>
            <textarea name="followupComment" rows="3" placeholder="Kva er starta, og kva skal gjerast vidare?"></textarea>
          </label>
          <label>
            <span>Lukkenotat</span>
            <textarea name="closeNote" rows="3">${escapeHtml(report.closeNote || "")}</textarea>
          </label>
          <button type="submit" class="primary-button">Lagre oppfølging</button>
        </form>
      </details>

      <section class="followup-section" aria-label="Oppfølging">
        <div class="followup-heading">
          <h4>Oppfølging</h4>
          <span>${followUps.length} oppdateringar</span>
        </div>
        ${followUpHtml}
        <form class="followup-form" data-id="${report.id}">
          <label>
            <span>Kommentar frå oppfølging</span>
            <textarea name="comment" rows="3" placeholder="Kva er gjort, kva står att, eller kva må andre vite?"></textarea>
          </label>
          <div class="form-row">
            <label>
              <span>Skrive av</span>
              <input name="author" value="${escapeAttribute(
                state.settings.managerName || "Driftsansvarleg"
              )}" />
            </label>
            <label class="photo-input">
              <span>Bilete frå tiltak</span>
              <input name="photo" type="file" accept="image/*" capture="environment" />
            </label>
          </div>
          <button type="submit" class="primary-button">Legg til oppdatering</button>
        </form>
      </section>

      <div class="report-footer-actions">
        <button type="button" class="secondary-button" data-action="notify" data-id="${report.id}">Send varsel</button>
        <button type="button" class="ghost-button danger-button" data-action="delete" data-id="${report.id}">Slett</button>
      </div>
    </article>
  `;
}

function normalizeFollowUps(followUps) {
  return Array.isArray(followUps) ? followUps : [];
}

function normalizePhotoList(photos) {
  return Array.isArray(photos)
    ? photos
        .filter((photo) => photo && photo.dataUrl)
        .map((photo) => ({
          id: photo.id || createId(),
          name: photo.name || "Bilete",
          dataUrl: photo.dataUrl
        }))
    : [];
}

function normalizeReportPhotos(report) {
  const photos = normalizePhotoList(report.photos);

  if (photos.length > 0) {
    return photos;
  }

  if (report.photoDataUrl) {
    return [
      {
        id: "legacy-photo",
        name: report.photoName || "Bilete",
        dataUrl: report.photoDataUrl
      }
    ];
  }

  return [];
}

function renderReportPhotos(photos, title) {
  if (photos.length === 0) {
    return "";
  }

  return `
    <div class="report-photo-grid">
      ${photos
        .map(
          (photo) => `
            <figure>
              <img class="report-photo" src="${escapeAttribute(photo.dataUrl)}" alt="Bilete av ${escapeAttribute(
                title
              )}" />
              <figcaption>${escapeHtml(photo.name || "Bilete")}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFollowUps(followUps) {
  if (followUps.length === 0) {
    return '<p class="empty-state">Ingen oppdateringar enno.</p>';
  }

  return `
    <div class="followup-list">
      ${followUps
        .slice()
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map(
          (entry) => `
            <article class="followup-item">
              <div class="followup-meta">
                <strong>${escapeHtml(entry.author || "Ukjend")}</strong>
                <span>${formatDate(entry.createdAt)}</span>
              </div>
              <p>${escapeHtml(entry.text || "")}</p>
              ${
                entry.photoDataUrl
                  ? `<img class="followup-photo" src="${entry.photoDataUrl}" alt="Bilete frå oppfølging" />`
                  : ""
              }
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

async function handleFollowUpSubmit(event) {
  const caseForm = event.target.closest(".case-followup-form");

  if (caseForm) {
    await handleCaseFollowUpSubmit(event, caseForm);
    return;
  }

  const form = event.target.closest(".followup-form");

  if (!form) {
    return;
  }

  event.preventDefault();

  const report = state.reports.find((item) => item.id === form.dataset.id);

  if (!report) {
    return;
  }

  const comment = form.elements.comment.value.trim();
  const author = form.elements.author.value.trim() || state.settings.managerName || "Driftsansvarleg";
  const file = form.elements.photo.files && form.elements.photo.files[0];

  if (!comment && !file) {
    setStorageStatus("Skriv kommentar eller legg ved bilete");
    return;
  }

  let photoDataUrl = "";
  let photoName = "";

  if (file) {
    const prepared = await preparePhoto(file);
    photoDataUrl = prepared.dataUrl;
    photoName = file.name;
  }

  const now = new Date().toISOString();
  const updatedReport = {
    ...report,
    updatedAt: now,
    followUps: [
      ...normalizeFollowUps(report.followUps),
      {
        id: createId(),
        author,
        text: comment || "Bilete lagt til i oppfølginga.",
        createdAt: now,
        status: report.status,
        photoDataUrl,
        photoName
      }
    ]
  };

  await persistReport(updatedReport);
  form.reset();
  setStorageStatus("Oppfølging lagt til");
}

async function handleCaseFollowUpSubmit(event, form) {
  event.preventDefault();

  const report = state.reports.find((item) => item.id === form.dataset.id);

  if (!report) {
    return;
  }

  const now = new Date().toISOString();
  const nextStatus = form.elements.status.value;
  const statusChanged = report.status !== nextStatus;
  const closeNote = form.elements.closeNote.value.trim();
  const followupComment = form.elements.followupComment.value.trim();
  const followUps = [...normalizeFollowUps(report.followUps)];

  if (followupComment || (report.status !== nextStatus && nextStatus === "under arbeid")) {
    followUps.push({
      id: createId(),
      author: state.settings.managerName || "Driftsansvarleg",
      text:
        followupComment ||
        "Arbeid med å rette avviket er starta.",
      createdAt: now,
      status: nextStatus,
      photoDataUrl: "",
      photoName: ""
    });
  }

  const updatedReport = {
    ...report,
    responsible: form.elements.responsible.value.trim(),
    status: nextStatus,
    dueDate: form.elements.dueDate.value,
    controlArea: form.elements.controlArea.value,
    immediateAction: form.elements.immediateAction.value.trim(),
    closeNote: nextStatus === "lukka" ? closeNote : closeNote,
    closedAt:
      nextStatus === "lukka"
        ? report.closedAt || now
        : "",
    updatedAt: now,
    followUps
  };

  await persistReport(updatedReport);

  if (statusChanged && shouldNotifyStatus(nextStatus)) {
    await sendNotification(updatedReport, true, notificationTypeForStatus(nextStatus));
  } else {
    setStorageStatus("Oppfølging oppdatert");
  }
}

async function handleReportAction(event) {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }

  const report = state.reports.find((item) => item.id === button.dataset.id);

  if (!report) {
    return;
  }

  if (button.dataset.action === "edit") {
    editReport(report);
    return;
  }

  if (button.dataset.action === "start") {
    await updateReportStatus(report, "under arbeid");
    return;
  }

  if (button.dataset.action === "close") {
    await updateReportStatus(report, "lukka");
    return;
  }

  if (button.dataset.action === "reopen") {
    await updateReportStatus(report, "aktiv");
    return;
  }

  if (button.dataset.action === "notify") {
    await sendNotification(report, false, "manual");
    return;
  }

  if (button.dataset.action === "delete") {
    await deleteReport(report);
  }
}

function editReport(report) {
  state.editingId = report.id;
  state.mapX = typeof report.mapX === "number" ? report.mapX : null;
  state.mapY = typeof report.mapY === "number" ? report.mapY : null;
  state.mapLabel = report.mapLabel || "";
  state.photos = normalizeReportPhotos(report);
  state.photoDataUrl = state.photos[0] ? state.photos[0].dataUrl : "";
  state.photoName = state.photos[0] ? state.photos[0].name : "";
  state.photoTouched = false;

  els.formMode.textContent = "Redigerer";
  els.formTitle.textContent = "Oppdater avvik";
  els.cancelEditButton.hidden = false;
  els.title.value = report.title;
  els.description.value = report.description;
  els.potentialConsequence.value = report.potentialConsequence || "";
  els.immediateAction.value = report.immediateAction || "";
  els.causeNote.value = report.causeNote || "";
  els.causeImprovement.value = report.causeImprovement || "";
  els.affectedPersons.value = report.affectedPersons || "";
  els.dueDate.value = report.dueDate || "";
  els.occurredAt.value = toDateTimeLocalValue(report.occurredAt || report.createdAt);
  setSelectValue(els.area, report.area, "Museum/inngang");
  setSelectValue(els.shift, report.shift, "1. smietur");
  els.riskRef.value = report.riskId || "";
  setSelectValue(els.controlArea, report.controlArea, "Strakstiltak");
  els.reportedBy.value = report.reportedBy || "";
  setSelectValue(els.reporterRole, normalizeReporterRole(report.reporterRole), "Hovudguide");
  els.reporterRoleOther.value = report.reporterRoleOther || "";
  els.responsible.value = report.responsible || "";
  els.status.value = report.status;
  els.closeNote.value = report.closeNote || "";
  els.notifyManager.checked = false;
  setSelectedRadio("kind", report.kind);
  setSelectedRadio("severity", report.severity);
  updateRiskPreviewFromReport(report);
  updateMapPoint();
  updateCloseNoteVisibility();
  updateReporterRoleOtherVisibility();
  updateDynamicForm();

  renderPhotoPreview();

  scrollToForm();
}

async function updateReportStatus(report, status) {
  const now = new Date().toISOString();
  const statusText =
    status === "under arbeid"
      ? "Arbeid med å rette avviket er starta."
      : status === "lukka"
        ? "Avviket er lukka frå tavla."
        : "Avviket er opna att.";
  const updatedReport = {
    ...report,
    status,
    updatedAt: now,
    closedAt: status === "lukka" ? now : "",
    closeNote: status === "lukka" ? report.closeNote || "Lukka frå tavla" : "",
    followUps: [
      ...normalizeFollowUps(report.followUps),
      {
        id: createId(),
        author: state.settings.managerName || "Driftsansvarleg",
        text: statusText,
        createdAt: now,
        status,
        photoDataUrl: "",
        photoName: ""
      }
    ]
  };

  await persistReport(updatedReport);

  if (shouldNotifyStatus(status)) {
    await sendNotification(updatedReport, true, notificationTypeForStatus(status));
  }
}

async function deleteReport(report) {
  if (!confirm(`Slette avviket "${report.title}"?`)) {
    return;
  }

  state.reports = state.reports.filter((item) => item.id !== report.id);
  saveReports();
  render();

  if (hasCloudConfig()) {
    try {
      await deleteCloudReport(report.id);
      setStorageStatus("Avvik sletta frå felleslista");
    } catch (error) {
      setStorageStatus(error.message || "Sletting feila");
    }
  }
}

async function sendNotification(report, automatic, notificationType = "registrering") {
  const now = new Date().toISOString();
  const recipients = notificationRecipients(report, notificationType);
  const subject = buildEmailSubject(report, notificationType);
  const body = buildEmailBody(report, notificationType);

  if (state.settings.notifyWebhook && isOnline() && recipients.length > 0) {
    try {
      await postNotificationWebhook(report, notificationType, recipients, subject, body);
      await persistReport({
        ...report,
        updatedAt: now,
        notificationStatus: "sendt",
        notificationSentAt: now,
        notificationMessage: `${notificationMessagePrefix(notificationType)} sendt automatisk til ${recipients.join(
          ", "
        )}`
      });
      return;
    } catch (error) {
      setStorageStatus(error.message || "Automatisk varsling feila");
    }
  } else if (state.settings.notifyWebhook && !isOnline()) {
    setStorageStatus("Offline: automatisk varsel blir klargjort som e-postutkast");
  }

  await prepareMailNotification(report, automatic, now, notificationType, subject, body, recipients);
}

async function postNotificationWebhook(report, notificationType, recipients, subject, body) {
  const response = await fetch(state.settings.notifyWebhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recipients,
      manager: {
        name: state.settings.managerName,
        email: state.settings.managerEmail,
        extraEmail: state.settings.extraEmail || "",
        phone: state.settings.managerPhone
      },
      notification: {
        type: notificationType,
        subject,
        body
      },
      report
    })
  });

  if (!response.ok) {
    throw new Error("Webhook tok ikkje imot varselet");
  }
}

async function sendTestEmail() {
  saveSettingsFromInputs();

  const now = new Date().toISOString();
  const report = {
    id: "testvarsel",
    title: "Testvarsel frå avvikssystemet",
    kind: "Risikoobservasjon",
    severity: "middels",
    status: "aktiv",
    area: "Museum/inngang",
    mapLabel: "Test",
    occurredAt: now,
    createdAt: now,
    updatedAt: now,
    reportedBy: state.settings.managerName || "Driftsansvarleg",
    reporterRole: "Driftsleiar",
    description: "Dette er eit testvarsel for å kontrollere automatisk e-postsending.",
    causeNote: "Test av varslingsoppsett",
    causeImprovement: "Ingen tiltak nødvendig",
    responsible: state.settings.managerName || "Driftsansvarleg",
    dueDate: "",
    immediateAction: "",
    controlArea: "Varsling",
    followUps: []
  };
  const notificationType = "test";
  const recipients = notificationRecipients(report, notificationType);

  if (recipients.length === 0) {
    setStorageStatus("Legg inn minst éi e-postadresse for varsel");
    return;
  }

  const subject = buildEmailSubject(report, notificationType);
  const body = buildEmailBody(report, notificationType);

  if (state.settings.notifyWebhook && isOnline()) {
    try {
      await postNotificationWebhook(report, notificationType, recipients, subject, body);
      setStorageStatus(`Testvarsel sendt automatisk til ${recipients.join(", ")}`);
      updateEmailAutomationStatus();
      return;
    } catch (error) {
      setStorageStatus(error.message || "Testvarsel kunne ikkje sendast automatisk");
    }
  }

  openMailDraft(buildMailto(subject, body, recipients));
  setStorageStatus(`Testutkast opna til ${recipients.join(", ")}`);
  updateEmailAutomationStatus();
}

async function prepareMailNotification(
  report,
  automatic,
  now,
  notificationType,
  subject,
  body,
  recipients
) {
  if (recipients.length === 0) {
    await persistReport({
      ...report,
      updatedAt: now,
      notificationStatus: "feila",
      notificationMessage: "Mottakar manglar"
    });
    return;
  }

  const mailto = buildMailto(subject, body, recipients);
  const recipientText = recipients.join(", ");

  if (automatic) {
    openMailDraft(mailto);
  }

  await persistReport({
    ...report,
    updatedAt: now,
    notificationStatus: "klart",
    notificationMessage: automatic
      ? `${notificationMessagePrefix(notificationType)} er klargjort til ${recipientText}`
      : `Varsel er klart til ${recipientText}`,
    mailto
  });
}

function openMailDraft(mailto) {
  const anchor = document.createElement("a");
  anchor.href = mailto;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function buildMailto(subject, body, recipients) {
  return `mailto:${recipients.map((email) => encodeURIComponent(email)).join(",")}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

function buildEmailSubject(report, notificationType) {
  const prefix =
    notificationType === "start"
      ? "Behandling starta"
      : notificationType === "close"
        ? "Avvik lukka"
        : notificationType === "manual"
          ? "Varsel"
          : notificationType === "test"
            ? "Testvarsel"
            : "Ny registrering";

  return `[Besøksgruve] ${prefix}: ${report.title}`;
}

function buildEmailBody(report, notificationType) {
  const eventDate = report.occurredAt || report.createdAt;
  const kind = normalizeKindValue(report.kind);
  const latestFollowUp = latestFollowUpEntry(report.followUps);
  const intro =
    notificationType === "start"
      ? "Driftsansvarleg har starta behandling av saka."
      : notificationType === "close"
        ? "Saka er lukka i avvikssystemet."
        : notificationType === "manual"
          ? "Det er sendt eit manuelt varsel frå avvikssystemet."
          : notificationType === "test"
            ? "Dette er eit testvarsel for automatisk e-postsending."
            : "Det er sendt inn ei ny registrering i avvikssystemet.";

  const lines = [
    "Hei,",
    "",
    intro,
    "",
    "SAK",
    "",
    `Tittel: ${report.title}`,
    `Type registrering: ${kind}`
  ];

  if (kind !== "Forbetringsforslag") {
    lines.push(`Alvorlegheitsgrad: ${report.severity}`);
  }

  lines.push(
    `Område: ${report.area || "ikkje sett"}`,
    `Kartpunkt: ${report.mapLabel || "ikkje sett"}`,
    `Tidspunkt for hending/observasjon: ${formatDate(eventDate)}`,
    `Meldt av: ${report.reportedBy || "ikkje sett"}${
      report.reporterRole ? ` (${report.reporterRole})` : ""
    }`,
    "",
    "SKILDRING",
    "",
    kind === "Risikoobservasjon" ? "Kva observerte du?" : "Kva har skjedd?",
    report.description || "ikkje sett",
    "",
    `Mogeleg årsak: ${report.causeNote || "ikkje sett"}`,
    "",
    `Forslag til tiltak: ${report.causeImprovement || "ikkje sett"}`,
    "",
    "OPPFØLGING",
    "",
    `Ansvarleg: ${report.responsible || "ikkje sett"}`,
    `Frist: ${report.dueDate || "ikkje sett"}`,
    `Strakstiltak: ${report.immediateAction || "ikkje sett"}`,
    `Type tiltak: ${report.controlArea || "ikkje sett"}`,
    "",
    "STATUS",
    "",
    `Status: ${report.status}`,
    `Siste oppdatering: ${formatDate(report.updatedAt)}`
  );

  if (latestFollowUp) {
    lines.push(
      "",
      "SISTE KOMMENTAR",
      "",
      `${latestFollowUp.author || "Ukjend"} - ${formatDate(latestFollowUp.createdAt)}`,
      latestFollowUp.text || "ikkje sett"
    );
  }

  lines.push(
    "",
    "Dette varselet er sendt frå avvikssystemet for besøksgruva."
  );

  return lines.join("\n");
}

function notificationRecipients(report, notificationType) {
  const recipients = [state.settings.managerEmail];

  if (guideGroupShouldReceive(report, notificationType)) {
    recipients.push(state.settings.extraEmail);
  }

  return [...new Set(recipients.map((email) => (email || "").trim()).filter(Boolean))];
}

function guideGroupShouldReceive(report, notificationType) {
  if (!state.settings.extraEmail) {
    return false;
  }

  return GUIDE_NOTIFICATION_KINDS.includes(normalizeKindValue(report.kind));
}

function shouldNotifyStatus(status) {
  return status === "under arbeid" || status === "lukka";
}

function notificationTypeForStatus(status) {
  return status === "lukka" ? "close" : "start";
}

function notificationMessagePrefix(notificationType) {
  if (notificationType === "start") {
    return "Varsel om oppstart";
  }

  if (notificationType === "close") {
    return "Varsel om lukking";
  }

  if (notificationType === "test") {
    return "Testvarsel";
  }

  return "E-postvarsel";
}

async function syncFromCloud(silent) {
  if (!hasCloudConfig()) {
    setStorageStatus("Fellesliste er ikkje sett opp");
    return;
  }

  if (!isOnline()) {
    setStorageStatus("Offline: brukar lokal avviksliste");
    renderSyncState();
    return;
  }

  if (!silent) {
    setStorageStatus("Hentar fellesliste ...");
  }

  try {
    const response = await fetch(
      `${cleanCloudUrl()}/rest/v1/${encodeURIComponent(
        state.settings.cloudTable
      )}?select=id,data,updated_at&order=updated_at.desc`,
      {
        headers: cloudHeaders()
      }
    );

    if (!response.ok) {
      throw new Error("Klarte ikkje hente felleslista");
    }

    const rows = await response.json();
    const cloudReports = rows.map((row) => ({
        ...row.data,
        id: row.data.id || row.id
      }));
    const mergedReports = mergeReports(state.reports, cloudReports);
    state.reports = sortReports(mergedReports);
    saveReports();
    render();

    await Promise.all(mergedReports.map((report) => saveCloudReport(report)));
    setStorageStatus("Fellesliste oppdatert");
  } catch (error) {
    setStorageStatus(error.message || "Synk feila");
  }
}

async function saveCloudReport(report) {
  const response = await fetch(
    `${cleanCloudUrl()}/rest/v1/${encodeURIComponent(state.settings.cloudTable)}`,
    {
      method: "POST",
      headers: {
        ...cloudHeaders(),
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        id: report.id,
        data: report,
        updated_at: report.updatedAt
      })
    }
  );

  if (!response.ok) {
    throw new Error("Klarte ikkje lagre i felleslista");
  }
}

async function deleteCloudReport(id) {
  const response = await fetch(
    `${cleanCloudUrl()}/rest/v1/${encodeURIComponent(
      state.settings.cloudTable
    )}?id=eq.${encodeURIComponent(id)}`,
    {
      method: "DELETE",
      headers: cloudHeaders()
    }
  );

  if (!response.ok) {
    throw new Error("Klarte ikkje slette frå felleslista");
  }
}

function hasCloudConfig() {
  return Boolean(
    state.settings.cloudUrl && state.settings.cloudKey && state.settings.cloudTable
  );
}

function isOnline() {
  return navigator.onLine !== false;
}

function mergeReports(localReports, cloudReports) {
  const byId = new Map();

  [...cloudReports, ...localReports].forEach((report) => {
    if (!report || !report.id) {
      return;
    }

    const existing = byId.get(report.id);

    if (!existing || reportTimestamp(report) >= reportTimestamp(existing)) {
      byId.set(report.id, report);
    }
  });

  return [...byId.values()];
}

function reportTimestamp(report) {
  return new Date(report.updatedAt || report.createdAt || 0).getTime();
}

function cleanCloudUrl() {
  return state.settings.cloudUrl.replace(/\/+$/, "");
}

function cloudHeaders() {
  return {
    apikey: state.settings.cloudKey,
    Authorization: `Bearer ${state.settings.cloudKey}`
  };
}

function exportArcgisGeoJson() {
  const reportsWithMapPoint = sortReports(state.reports).filter(hasMapPoint);

  if (reportsWithMapPoint.length === 0) {
    setStorageStatus("ArcGIS-eksport krev minst eitt avvik med område");
    return;
  }

  const geojson = {
    type: "FeatureCollection",
    name: "besoksgruve_avvik",
    features: reportsWithMapPoint.map((report) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: schematicPointToGeoJson(report)
      },
      properties: arcgisProperties(report)
    }))
  };

  downloadFile(
    `besoksgruve-avvik-arcgis-${fileDate()}.geojson`,
    "application/geo+json;charset=utf-8",
    JSON.stringify(geojson, null, 2)
  );
  setStorageStatus(
    `ArcGIS GeoJSON klar (${reportsWithMapPoint.length} av ${state.reports.length} avvik)`
  );
}

function hasMapPoint(report) {
  return (
    (typeof report.mapX === "number" && typeof report.mapY === "number") ||
    Boolean(areaMapLocation(report.area || report.mapLabel))
  );
}

function schematicPointToGeoJson(report) {
  const location =
    typeof report.mapX === "number" && typeof report.mapY === "number"
      ? { x: report.mapX, y: report.mapY }
      : areaMapLocation(report.area || report.mapLabel) || MAP_LOCATIONS[0];

  return [
    Number((location.x / 10).toFixed(6)),
    Number(((100 - location.y) / 10).toFixed(6))
  ];
}

function areaMapLocation(area) {
  const normalizedArea = normalizeAreaValue(area);
  return MAP_LOCATIONS.find(
    (location) => location.area === normalizedArea || location.label === normalizedArea
  );
}

function arcgisProperties(report) {
  const isActive = report.status !== "lukka";
  const isClosed = report.status === "lukka";
  const isCritical = report.severity === "høg" || report.severity === "akutt";
  const ageDays = daysBetween(report.createdAt, report.closedAt || new Date().toISOString());
  const responsible = responsibleName(report);
  const followUps = normalizeFollowUps(report.followUps);
  const latestFollowUp = latestFollowUpEntry(followUps);
  const photos = normalizeReportPhotos(report);
  const firstPhoto = photos[0] || null;

  return {
    avvik_id: report.id,
    tittel: report.title,
    skildring: report.description,
    strakstiltak: report.immediateAction || "",
    arsak: report.causeNote || "",
    arsak_forbetring: report.causeImprovement || "",
    avvik_type: normalizeKindValue(report.kind),
    type: normalizeKindValue(report.kind),
    risikopunkt: report.riskId || "",
    risiko_tittel: report.riskTitle || "",
    risiko_s: report.riskProbability || "",
    risiko_k: report.riskConsequence || "",
    risiko_score: report.riskScore || "",
    risiko_tiltak: report.riskMeasure || "",
    type_tiltak: report.controlArea || "",
    omrade: report.area,
    alvor: report.severity,
    severity: report.severity,
    status: report.status,
    meldt_av: report.reportedBy || "",
    melder_rolle: report.reporterRole || "",
    melder_rolle_merknad: report.reporterRoleOther || "",
    hending_gjeld: report.affectedPersons || "",
    ansvarleg: responsible,
    responsible,
    ansvarleg_key: responsibleKey(responsible),
    ansvarleg_tal: 1,
    nar_oppdaga: report.shift || "",
    hending_tid: report.occurredAt || report.createdAt || "",
    created_at: report.createdAt,
    oppretta: report.createdAt,
    updated_at: report.updatedAt,
    oppdatert: report.updatedAt,
    lukka: report.closedAt || "",
    lukkenotat: report.closeNote || "",
    varsling_status: report.notificationStatus || "ikkje sendt",
    varsling_melding: report.notificationMessage || "",
    kart_stad: report.mapLabel || report.area || "",
    location: report.mapLabel || report.area || "",
    kart_x: report.mapX ?? "",
    kart_y: report.mapY ?? "",
    kartgrunnlag: "skjematisk gruvekart",
    foto_namn: firstPhoto ? firstPhoto.name : "",
    foto_namn_alle: photos.map((photo) => photo.name).join("; "),
    photo_url: firstPhoto ? firstPhoto.dataUrl : "",
    photo_urls: photos.map((photo) => photo.dataUrl).join("; "),
    due_date: report.dueDate || "",
    risk_score: report.riskScore || report.computedRiskScore || "",
    har_foto: photos.length > 0 ? "ja" : "nei",
    foto_tal: photos.length,
    oppfolging_tal: followUps.length,
    siste_oppfolging: latestFollowUp ? latestFollowUp.text : "",
    siste_oppfolging_av: latestFollowUp ? latestFollowUp.author : "",
    siste_oppfolging_dato: latestFollowUp ? latestFollowUp.createdAt : "",
    total_tal: 1,
    aktiv_tal: isActive ? 1 : 0,
    lukka_tal: isClosed ? 1 : 0,
    kritisk_tal: isCritical && isActive ? 1 : 0,
    under_arbeid_tal: report.status === "under arbeid" ? 1 : 0,
    status_rank: STATUS_RANK[report.status] || 99,
    alvor_rank: SEVERITY_RANK[report.severity] || 99,
    alder_dagar: ageDays,
    dashboard_liste: `${report.severity.toUpperCase()} | ${report.title}`,
    dashboard_gruppe: isClosed ? "Lukka" : isCritical ? "Krev oppfølging" : "Aktiv",
    dashboard_popup: [
      report.description,
      report.immediateAction ? `Strakstiltak: ${report.immediateAction}` : "",
      report.causeNote ? `Årsak: ${report.causeNote}` : "",
      report.causeImprovement ? `Forslag til tiltak: ${report.causeImprovement}` : "",
      report.closeNote ? `Lukka: ${report.closeNote}` : ""
    ]
      .filter(Boolean)
      .join("\n\n")
  };
}

function latestFollowUpEntry(followUps) {
  return normalizeFollowUps(followUps)
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
}

function daysBetween(startIso, endIso) {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();

  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return 0;
  }

  return Math.max(0, Math.round((end - start) / 86400000));
}

function exportCsv() {
  const headers = [
    "avvik_id",
    "tittel",
    "skildring",
    "strakstiltak",
    "arsak",
    "arsak_forbetring",
    "frist",
    "type_avvik",
    "risikopunkt",
    "risiko_tittel",
    "risiko_s",
    "risiko_k",
    "risiko_score",
    "risiko_tiltak",
    "type_tiltak",
    "område",
    "alvor",
    "status",
    "meldt_av",
    "melder_rolle",
    "melder_rolle_merknad",
    "hending_gjeld",
    "ansvarleg",
    "nar_oppdaga",
    "hending_tid",
    "kart_stad",
    "kart_x",
    "kart_y",
    "kartgrunnlag",
    "oppretta",
    "oppdatert",
    "lukka",
    "lukkenotat",
    "varsling_status",
    "varsling_melding",
    "oppfolging_tal",
    "siste_oppfolging",
    "siste_oppfolging_av",
    "siste_oppfolging_dato"
  ];

  const rows = sortReports(state.reports).map((report) => {
    const followUps = normalizeFollowUps(report.followUps);
    const latestFollowUp = latestFollowUpEntry(followUps);

    return [
      report.id,
      report.title,
      report.description,
      report.immediateAction,
      report.causeNote,
      report.causeImprovement,
      report.dueDate,
      normalizeKindValue(report.kind),
      report.riskId,
      report.riskTitle,
      report.riskProbability,
      report.riskConsequence,
      report.riskScore,
      report.riskMeasure,
      report.controlArea,
      report.area,
      report.severity,
      report.status,
      report.reportedBy,
      report.reporterRole,
      report.reporterRoleOther,
      report.affectedPersons,
      report.responsible,
      report.shift,
      report.occurredAt || report.createdAt,
      report.mapLabel,
      report.mapX,
      report.mapY,
      "skjematisk gruvekart",
      report.createdAt,
      report.updatedAt,
      report.closedAt,
      report.closeNote,
      report.notificationStatus,
      report.notificationMessage,
      followUps.length,
      latestFollowUp?.text,
      latestFollowUp?.author,
      latestFollowUp?.createdAt
    ];
  });

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => csvCell(cell)).join(","))
    .join("\n");

  downloadFile(`besoksgruve-avvik-${fileDate()}.csv`, "text/csv;charset=utf-8", `\uFEFF${csv}`);
}

function exportJson() {
  downloadFile(
    `besoksgruve-avvik-${fileDate()}.json`,
    "application/json;charset=utf-8",
    JSON.stringify({ reports: sortReports(state.reports) }, null, 2)
  );
}

function importJson(event) {
  const file = event.target.files && event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const incomingReports = Array.isArray(parsed) ? parsed : parsed.reports;

      if (!Array.isArray(incomingReports)) {
        throw new Error("Fila har ikkje avviksliste");
      }

      const byId = new Map(state.reports.map((report) => [report.id, report]));
      incomingReports.forEach((report) => byId.set(report.id || createId(), report));
      state.reports = sortReports([...byId.values()]);
      saveReports();
      render();
      setStorageStatus("JSON importert");
    } catch (error) {
      setStorageStatus(error.message || "Import feila");
    } finally {
      els.importJson.value = "";
    }
  };
  reader.readAsText(file);
}

function clearLocalData() {
  if (!confirm("Slette alle lokale avvik i denne nettlesaren?")) {
    return;
  }

  state.reports = [];
  saveReports();
  render();
  setStorageStatus("Lokal testdata sletta");
}

function downloadFile(filename, mimeType, content) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function fileDate() {
  return new Date().toISOString().slice(0, 10);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function formatDate(iso) {
  if (!iso) {
    return "ikkje sett";
  }

  return new Intl.DateTimeFormat("nn-NO", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(iso));
}

function toDateTimeLocalValue(iso) {
  const date = iso ? new Date(iso) : new Date();

  if (!Number.isFinite(date.getTime())) {
    return "";
  }

  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 16);
}

function showNotice(message) {
  els.formNotice.textContent = message;
  els.formNotice.hidden = false;
  els.formError.hidden = true;
}

function showError(message) {
  els.formError.textContent = message;
  els.formError.hidden = false;
  els.formNotice.hidden = true;
}

function clearFormMessage() {
  els.formNotice.hidden = true;
  els.formError.hidden = true;
}

function setStorageStatus(message) {
  els.storageStatus.textContent = message;
}

function scrollToForm() {
  document.querySelector(".form-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }

  return String(value).replaceAll('"', '\\"');
}
