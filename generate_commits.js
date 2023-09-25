const fs = require('fs');
const simpleGit = require('simple-git');
const moment = require('moment');
const { execSync } = require('child_process');

const git = simpleGit();
const repoPath = './';
const filePath = `${repoPath}/data.json`;
const commitMessage = "Automated commit";

// Definizione dell'intervallo di date personalizzato
const startDate = moment('2023-09-25', 'YYYY-MM-DD'); // Modifica qui la data di inizio
const endDate = moment('2023-09-27', 'YYYY-MM-DD'); // Modifica qui la data di fine

// Creazione del repository locale se non esiste
if (!fs.existsSync(repoPath)) {
    fs.mkdirSync(repoPath);
    execSync(`git init`, { cwd: repoPath });
    try {
    execSync(`git remote add origin YOUR_GITHUB_REPO_URL`, { cwd: repoPath });
} catch (error) {
    console.log("Remote origin già impostato.");
}

}

// Funzione per generare date casuali all'interno di un intervallo specifico
function generateCommitDates(start, end, density) {
    let dates = [];
    let currentDate = start.clone();
    while (currentDate.isSameOrBefore(end)) {
        if (Math.random() < density) {  // Controllo sulla densità dei commit
            let date = currentDate.format('YYYY-MM-DD HH:mm:ss');
            dates.push(date);
        }
        currentDate.add(1, 'days');
    }
    return dates;
}

// Funzione per creare i commit
async function createCommits(dates) {
    for (let date of dates) {
        fs.writeFileSync(filePath, JSON.stringify({ date }));
        execSync(`git add .`, { cwd: repoPath });
        execSync(`GIT_COMMITTER_DATE="${date}" git commit -m "${commitMessage}" --date "${date}"`, { cwd: repoPath });
    }
    execSync(`git push origin main`, { cwd: repoPath });
}

// Generazione dei commit all'interno dell'intervallo
let commitDates = generateCommitDates(startDate, endDate, 0.4); // 40% di densità
createCommits(commitDates);

console.log("Commit generati e pushati con successo nel range selezionato!");
