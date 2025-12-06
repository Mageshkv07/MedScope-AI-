// ---- HOME SEARCH: MASTER AGENT ANALYSIS ----
function searchMolecule() {
    let q = document.getElementById("searchBox").value;
    let resultBox = document.getElementById("result");

    if (q.trim() === "") {
        resultBox.innerHTML = `<div class='card'><h3>Please enter a disease or molecule.</h3></div>`;
        return;
    }

    // LOADING
    resultBox.innerHTML = `
        <div class='loader'></div>
        <p style="text-align:center; color:#0077b6;">Analyzing "${q}" with all Agents...</p>
    `;

    setTimeout(() => {
        resultBox.innerHTML = `
            <div class='card'>
                <h2>🧠 Master Agent Report for: ${q}</h2>

                ${createReportSection("MASTER AGENT", 
                    "Executive Summary, Key Findings, Market Analysis, Clinical Trial Overview, Recommended Next Steps for " + q + ".")}

                ${createReportSection("IQVIA Insights Agent", 
                    "Market size, CAGR, therapy competition, volume trends for " + q + ".")}

                ${createReportSection("EXIM Trends Agent", 
                    "API import-export volumes, sourcing dependencies, trade trends for " + q + ".")}

                ${createReportSection("Patent Landscape Agent", 
                    "Active patents, expiry dates, FTO risks, legal landscape related to " + q + ".")}

                ${createReportSection("Clinical Trials Agent", 
                    "Trial phases, sponsors, enrollment insights & global registry data for " + q + ".")}

                ${createReportSection("Web Intelligence Agent", 
                    "Scientific articles, guidelines, news updates, and patient forum signals for " + q + ".")}
            </div>
        `;

        activateToggle();
    }, 1500);
}

// ---- DROPDOWN BOX ----
function createReportSection(title, content) {
    return `
        <div class="report-section">
            <div class="report-title">
                ${title}
                <span class="arrow">▶</span>
            </div>
            <div class="report-content">${content}</div>
        </div>
    `;
}

function activateToggle() {
    document.querySelectorAll(".report-title").forEach(title => {
        title.onclick = () => toggleSection(title);
    });
}

function toggleSection(title) {
    let content = title.nextElementSibling;
    let arrow = title.querySelector(".arrow");

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        content.style.display = "block";
        arrow.classList.add("rotate");
    }
}

// ---- INSIGHTS PAGE ----
function showInsights() {
    document.getElementById("result").innerHTML = `
        <div class='card'>
            <h2>1. Emerging Pharma Trends 2025</h2>
            <p>Latest innovations shaping the pharmaceutical landscape including AI-driven R&D and rapid drug evaluation models.</p>
        </div>

        <div class='card'>
            <h2>2. Drug Repurposing Opportunities</h2>
            <p>High-potential molecules identified for repositioning into new therapeutic areas.</p>
        </div>

        <div class='card'>
            <h2>3. Regulatory Intelligence Update</h2>
            <p>Global regulatory shifts affecting approvals, safety guidelines & compliance pathways.</p>
        </div>

        <div class='card'>
            <h2>4. AI in Molecule Discovery</h2>
            <p>How AI accelerates research, mechanism prediction & indication mapping.</p>
        </div>
    `;

    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

// ---- INDUSTRIES PAGE ----
function showIndustries() {
    document.getElementById("result").innerHTML = `
        <div class='card'>
            <h2>1. Pharmaceuticals</h2>
            <p>AI-powered insights for drug discovery, repurposing & competitive analysis.<br>
            <i>Innovation, safety insights & growth strategies.</i></p>
        </div>

        <div class='card'>
            <h2>2. Biotechnology</hh2>
            <p>Supporting biotech firms from research to commercialization.<br>
            <i>Molecule intelligence, trial mapping, patent analysis.</i></p>
        </div>

        <div class='card'>
            <h2>3. Research Institutions</h2>
            <p>Collaborative research & technology acceleration.<br>
            <i>Evidence mining & molecular exploration.</i></p>
        </div>

        <div class='card'>
            <h2>4. Healthcare Providers</h2>
            <p>Clinical decision support & patient-centric analytics.<br>
            <i>Trial availability, treatment patterns & medical knowledge search.</i></p>
        </div>
    `;

    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

// ---- ABOUT US PAGE ----
function showAbout() {
    document.getElementById("result").innerHTML = `
        <div class='card'>
            <h2>👥 About Us</h2>
            <p>1. <b>Rubini T</b> – III Year Artificial Intelligence and Data Science</p>
            <p>2. <b>Kokulavarthini T</b> – III Year</p>
            <p>3. <b>Ruthrakaran J</b> – III Year</p>
            <p>4. <b>Sabithan M</b> – III Year</p>
            <p>5. <b>K V Magesh</b> – II Year CSE-AIML</p>
        </div>
    `;

    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}
