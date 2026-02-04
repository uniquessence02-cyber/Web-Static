// ============================================================================
// SALES PERFORMANCE ANALYTICS PLATFORM - MAIN JAVASCRIPT
// ============================================================================

// ============================================================================
// DATA STRUCTURES - Realistic business data modeling
// ============================================================================

const employeesData = [
    { id: 1, name: "E-1", role: "Senior Sales Rep", callsPerDay: 42, conversions: 18, revenue: 250, rating: 4.8 },
    { id: 2, name: "E-2", role: "Sales Representative", callsPerDay: 38, conversions: 15, revenue: 200, rating: 4.6 },
    { id: 3, name: "E-3", role: "Account Executive", callsPerDay: 45, conversions: 21, revenue: 400, rating: 4.9 },
    { id: 4, name: "E-4", role: "Sales Representative", callsPerDay: 35, conversions: 12, revenue: 550, rating: 4.3 },
    { id: 5, name: "E-5", role: "Senior Sales Rep", callsPerDay: 40, conversions: 17, revenue: 750, rating: 4.7 },
    { id: 6, name: "E-6", role: "Sales Representative", callsPerDay: 33, conversions: 11, revenue: 100, rating: 4.2 },
    { id: 7, name: "E-7", role: "Account Executive", callsPerDay: 41, conversions: 19, revenue: 1000, rating: 4.8 },
    { id: 8, name: "E-8", role: "Sales Representative", callsPerDay: 36, conversions: 13, revenue: 1500, rating: 4.4 }
];

const clientsData = [
    { id: 101, name: "Acme Corporation", employeeId: 1, calls: 8, status: "converted", revenue: 12500, satisfaction: "satisfied", rating: 5 },
    { id: 102, name: "TechFlow Systems", employeeId: 2, calls: 5, status: "converted", revenue: 8700, satisfaction: "satisfied", rating: 4 },
    { id: 103, name: "GlobalTrade Inc", employeeId: 3, calls: 12, status: "converted", revenue: 15800, satisfaction: "satisfied", rating: 5 },
    { id: 104, name: "InnovateCo", employeeId: 1, calls: 6, status: "converted", revenue: 9200, satisfaction: "satisfied", rating: 4 },
    { id: 105, name: "DataCore Solutions", employeeId: 4, calls: 7, status: "pending", revenue: 0, satisfaction: "interested", rating: 3 },
    { id: 106, name: "CloudNine Systems", employeeId: 5, calls: 9, status: "converted", revenue: 11400, satisfaction: "satisfied", rating: 5 },
    { id: 107, name: "NexGen Industries", employeeId: 2, calls: 4, status: "declined", revenue: 0, satisfaction: "not_interested", rating: 2 },
    { id: 108, name: "FutureTech Labs", employeeId: 6, calls: 5, status: "pending", revenue: 0, satisfaction: "interested", rating: 3 },
    { id: 109, name: "ProActive Solutions", employeeId: 3, calls: 11, status: "converted", revenue: 13600, satisfaction: "satisfied", rating: 5 },
    { id: 110, name: "Velocity Dynamics", employeeId: 7, calls: 8, status: "converted", revenue: 10200, satisfaction: "satisfied", rating: 4 },
    { id: 111, name: "Apex Enterprises", employeeId: 4, calls: 6, status: "declined", revenue: 0, satisfaction: "not_interested", rating: 2 },
    { id: 112, name: "Summit Corp", employeeId: 8, calls: 7, status: "converted", revenue: 9800, satisfaction: "satisfied", rating: 4 },
    { id: 113, name: "Horizon Group", employeeId: 1, calls: 5, status: "pending", revenue: 0, satisfaction: "interested", rating: 3 },
    { id: 114, name: "Pinnacle Systems", employeeId: 5, calls: 8, status: "converted", revenue: 11000, satisfaction: "not_satisfied", rating: 2 },
    { id: 115, name: "Quantum Ventures", employeeId: 3, calls: 10, status: "pending", revenue: 0, satisfaction: "interested", rating: 3 },
    { id: 116, name: "Stellar Industries", employeeId: 6, calls: 4, status: "declined", revenue: 0, satisfaction: "not_interested", rating: 1 },
    { id: 117, name: "Catalyst Corp", employeeId: 7, calls: 9, status: "converted", revenue: 12300, satisfaction: "satisfied", rating: 5 },
    { id: 118, name: "Momentum LLC", employeeId: 2, calls: 6, status: "converted", revenue: 8900, satisfaction: "satisfied", rating: 4 },
    { id: 119, name: "Eclipse Solutions", employeeId: 8, calls: 5, status: "pending", revenue: 0, satisfaction: "interested", rating: 3 },
    { id: 120, name: "Vanguard Systems", employeeId: 4, calls: 4, status: "declined", revenue: 0, satisfaction: "not_interested", rating: 2 }
];

const weeklyCallsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    calls: [30, 70, 50, 100, 40, 45, 90],
    conversions: [15, 8, , 20, 8, 5, 10]
};

const weeklyRevenueData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    revenue: [325, 990, 999, 450, 690, 840, 1200]
};

const feedbackData = [
    { client: "Acme Corporation", employee: "Sarah Johnson", rating: 5, comment: "Excellent service and professional approach. Very satisfied with the outcome.", date: "2024-02-01" },
    { client: "TechFlow Systems", employee: "Michael Chen", rating: 4, comment: "Good communication throughout the process. Minor delays but overall positive experience.", date: "2024-02-02" },
    { client: "GlobalTrade Inc", employee: "Emily Rodriguez", rating: 5, comment: "Outstanding support and expertise. Exceeded our expectations in every way.", date: "2024-02-03" },
    { client: "InnovateCo", employee: "Sarah Johnson", rating: 4, comment: "Professional team with solid product knowledge. Would recommend.", date: "2024-02-04" },
    { client: "Pinnacle Systems", employee: "Jennifer Martinez", rating: 2, comment: "Service quality did not meet our requirements. Response time could be improved.", date: "2024-02-05" }
];

// ============================================================================
// BUSINESS LOGIC CALCULATIONS
// ============================================================================

function calculateTotalCalls() {
    return employeesData.reduce((sum, emp) => sum + emp.callsPerDay, 0) * 7;
}

function calculateTotalRevenue() {
    return clientsData
        .filter(client => client.status === "converted")
        .reduce((sum, client) => sum + client.revenue, 0);
}

function calculateConversionRate() {
    const totalCalls = calculateTotalCalls();
    const conversions = clientsData.filter(c => c.status === "converted").length;
    return totalCalls > 0 ? ((conversions / totalCalls) * 100).toFixed(1) : 0;
}

function calculateSatisfactionRate() {
    const satisfiedClients = clientsData.filter(c => c.satisfaction === "satisfied").length;
    const totalClients = clientsData.length;
    return totalClients > 0 ? ((satisfiedClients / totalClients) * 100).toFixed(1) : 0;
}

function getClientStatusBreakdown() {
    return {
        satisfied: clientsData.filter(c => c.satisfaction === "satisfied").length,
        notSatisfied: clientsData.filter(c => c.satisfaction === "not_satisfied").length,
        notInterested: clientsData.filter(c => c.satisfaction === "not_interested").length,
        pending: clientsData.filter(c => c.satisfaction === "interested").length
    };
}

function calculateEmployeeProductivityScore(employee) {
    // Weighted formula: calls (30%) + conversions (50%) + revenue contribution (20%)
    const callsScore = employee.callsPerDay * 0.3;
    const conversionsScore = employee.conversions * 0.5;
    const revenueScore = (employee.revenue / 1000) * 0.2;
    return (callsScore + conversionsScore + revenueScore).toFixed(1);
}

function calculateEmployeeConversionRate(employee) {
    const totalCalls = employee.callsPerDay * 7;
    return totalCalls > 0 ? ((employee.conversions / totalCalls) * 100).toFixed(1) : 0;
}

function getTopPerformers(count = 3) {
    return employeesData
        .map(emp => ({
            ...emp,
            productivityScore: parseFloat(calculateEmployeeProductivityScore(emp))
        }))
        .sort((a, b) => b.productivityScore - a.productivityScore)
        .slice(0, count);
}

function getEmployeeById(id) {
    return employeesData.find(emp => emp.id === id);
}

function getClientsByEmployee(employeeId) {
    return clientsData.filter(client => client.employeeId === employeeId);
}

// ============================================================================
// CHART RENDERING FUNCTIONS
// ============================================================================

function drawLineChart(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth * 2;
    const height = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    
    const padding = 50;
    const chartWidth = width / 2 - padding * 2;
    const chartHeight = height / 2 - padding * 2;
    
    const maxValue = Math.max(...data.datasets.flatMap(d => d.values));
    const minValue = 0;
    const valueRange = maxValue - minValue;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw y-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = maxValue - (valueRange / 5) * i;
        const y = padding + (chartHeight / 5) * i;
        ctx.fillText(Math.round(value).toString(), padding - 10, y + 4);
    }
    
    // Draw x-axis labels
    ctx.textAlign = 'center';
    data.labels.forEach((label, i) => {
        const x = padding + (chartWidth / (data.labels.length - 1)) * i;
        ctx.fillText(label, x, padding + chartHeight + 20);
    });
    
    // Draw lines
    data.datasets.forEach((dataset, datasetIndex) => {
        ctx.strokeStyle = dataset.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        dataset.values.forEach((value, i) => {
            const x = padding + (chartWidth / (data.labels.length - 1)) * i;
            const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // Draw points
        ctx.fillStyle = dataset.color;
        dataset.values.forEach((value, i) => {
            const x = padding + (chartWidth / (data.labels.length - 1)) * i;
            const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    });
}

function drawBarChart(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth * 2;
    const height = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    
    const padding = 50;
    const chartWidth = width / 2 - padding * 2;
    const chartHeight = height / 2 - padding * 2;
    
    const maxValue = Math.max(...data.values);
    const barWidth = chartWidth / data.labels.length - 10;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw y-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = maxValue - (maxValue / 5) * i;
        const y = padding + (chartHeight / 5) * i;
        ctx.fillText(Math.round(value).toString(), padding - 10, y + 4);
    }
    
    // Draw bars
    data.values.forEach((value, i) => {
        const x = padding + (chartWidth / data.labels.length) * i + 5;
        const barHeight = (value / maxValue) * chartHeight;
        const y = padding + chartHeight - barHeight;
        
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
        gradient.addColorStop(0, data.color || '#2563eb');
        gradient.addColorStop(1, data.colorEnd || '#1e40af');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(value).toString(), x + barWidth / 2, y - 5);
    });
    
    // Draw x-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    data.labels.forEach((label, i) => {
        const x = padding + (chartWidth / data.labels.length) * i + barWidth / 2 + 5;
        ctx.fillText(label, x, padding + chartHeight + 20);
    });
}

function drawPieChart(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth * 2;
    const height = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    
    const centerX = width / 4;
    const centerY = height / 4;
    const radius = Math.min(width, height) / 4 - 40;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const total = data.values.reduce((sum, val) => sum + val, 0);
    let currentAngle = -Math.PI / 2;
    
    data.values.forEach((value, i) => {
        const sliceAngle = (value / total) * Math.PI * 2;
        
        ctx.fillStyle = data.colors[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        
        // Draw slice border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw percentage label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
        const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round((value / total) * 100) + '%', labelX, labelY);
        
        currentAngle += sliceAngle;
    });
}

// ============================================================================
// PAGE INITIALIZATION FUNCTIONS
// ============================================================================

function initializeDashboard() {
    // Update KPI values
    document.getElementById('totalCalls').textContent = calculateTotalCalls().toLocaleString();
    document.getElementById('totalRevenue').textContent = '$' + calculateTotalRevenue().toLocaleString();
    document.getElementById('conversionRate').textContent = calculateConversionRate() + '%';
    document.getElementById('satisfactionRate').textContent = calculateSatisfactionRate() + '%';
    
    // Update client insights
    const breakdown = getClientStatusBreakdown();
    const totalClients = clientsData.length;
    
    document.getElementById('satisfiedClients').textContent = breakdown.satisfied;
    document.getElementById('satisfiedPercent').textContent = ((breakdown.satisfied / totalClients) * 100).toFixed(0) + '%';
    
    document.getElementById('notSatisfiedClients').textContent = breakdown.notSatisfied;
    document.getElementById('notSatisfiedPercent').textContent = ((breakdown.notSatisfied / totalClients) * 100).toFixed(0) + '%';
    
    document.getElementById('notInterestedClients').textContent = breakdown.notInterested;
    document.getElementById('notInterestedPercent').textContent = ((breakdown.notInterested / totalClients) * 100).toFixed(0) + '%';
    
    document.getElementById('pendingClients').textContent = breakdown.pending;
    document.getElementById('pendingPercent').textContent = ((breakdown.pending / totalClients) * 100).toFixed(0) + '%';
    
    // Render charts
    drawLineChart('callsConversionsChart', {
        labels: weeklyCallsData.labels,
        datasets: [
            { values: weeklyCallsData.calls, color: '#2563eb', label: 'Calls' },
            { values: weeklyCallsData.conversions, color: '#10b981', label: 'Conversions' }
        ]
    });
    
    drawPieChart('clientStatusChart', {
        labels: ['Satisfied', 'Not Satisfied', 'Not Interested', 'Pending'],
        values: [breakdown.satisfied, breakdown.notSatisfied, breakdown.notInterested, breakdown.pending],
        colors: ['#10b981', '#ef4444', '#f59e0b', '#06b6d4']
    });
    
    drawBarChart('revenueChart', {
        labels: weeklyRevenueData.labels,
        values: weeklyRevenueData.revenue,
        color: '#2563eb',
        colorEnd: '#1e40af'
    });
    
    drawPieChart('satisfactionChart', {
        labels: ['Satisfied', 'Not Satisfied'],
        values: [breakdown.satisfied, breakdown.notSatisfied + breakdown.notInterested],
        colors: ['#10b981', '#ef4444']
    });
    
    // Render top performers
    renderTopPerformers();
    
    // Create legend for status chart
    createStatusLegend();
}

function renderTopPerformers() {
    const container = document.getElementById('topPerformers');
    if (!container) return;
    
    const topPerformers = getTopPerformers(3);
    
    container.innerHTML = topPerformers.map((emp, index) => `
        <div class="performer-card">
            <div class="performer-rank">${index + 1}</div>
            <div class="performer-details">
                <h4>${emp.name}</h4>
                <p class="performer-metric">${emp.conversions} conversions • $${emp.revenue.toLocaleString()} revenue</p>
            </div>
            <div class="performer-score">${emp.productivityScore}</div>
        </div>
    `).join('');
}

function createStatusLegend() {
    const legend = document.getElementById('statusLegend');
    if (!legend) return;
    
    const items = [
        { label: 'Satisfied', color: '#10b981' },
        { label: 'Not Satisfied', color: '#ef4444' },
        { label: 'Not Interested', color: '#f59e0b' },
        { label: 'Pending', color: '#06b6d4' }
    ];
    
    legend.innerHTML = items.map(item => `
        <div class="legend-item">
            <div class="legend-color" style="background-color: ${item.color}"></div>
            <span>${item.label}</span>
        </div>
    `).join('');
}

function initializeEmployeesPage() {
    renderEmployeePerformanceGrid();
    renderEmployeeComparisonChart();
    renderConversionRateChart();
    renderRevenueContributionChart();
}

function renderEmployeePerformanceGrid() {
    const container = document.getElementById('employeePerformanceGrid');
    if (!container) return;
    
    const employeesWithScores = employeesData.map(emp => ({
        ...emp,
        conversionRate: calculateEmployeeConversionRate(emp),
        productivityScore: calculateEmployeeProductivityScore(emp)
    })).sort((a, b) => b.productivityScore - a.productivityScore);
    
    container.innerHTML = employeesWithScores.map(emp => {
        const badge = emp.productivityScore >= 25 ? 'top' : emp.productivityScore >= 20 ? 'average' : 'needs-improvement';
        const badgeText = emp.productivityScore >= 25 ? 'Top Performer' : emp.productivityScore >= 20 ? 'Average' : 'Needs Improvement';
        
        return `
            <div class="employee-card">
                <div class="employee-header">
                    <div class="employee-avatar">${emp.name.split(' ').map(n => n[0]).join('')}</div>
                    <div class="employee-info">
                        <h3>${emp.name}</h3>
                        <p class="employee-role">${emp.role}</p>
                    </div>
                </div>
                <div class="employee-stats">
                    <div class="stat-row">
                        <span class="stat-label">Calls per Day</span>
                        <span class="stat-value">${emp.callsPerDay}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Conversions</span>
                        <span class="stat-value">${emp.conversions}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Conversion Rate</span>
                        <span class="stat-value">${emp.conversionRate}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Revenue</span>
                        <span class="stat-value">$${emp.revenue.toLocaleString()}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Productivity Score</span>
                        <span class="stat-value">${emp.productivityScore}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Client Rating</span>
                        <span class="stat-value">${emp.rating} ⭐</span>
                    </div>
                </div>
                <div class="performance-badge ${badge}">${badgeText}</div>
            </div>
        `;
    }).join('');
}

function renderEmployeeComparisonChart() {
    const canvas = document.getElementById('employeeComparisonChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth * 2;
    const height = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    
    const padding = 60;
    const chartWidth = width / 2 - padding * 2;
    const chartHeight = height / 2 - padding * 2;
    
    const employeeNames = employeesData.map(e => e.name.split(' ')[0]);
    const callsData = employeesData.map(e => e.callsPerDay);
    const conversionsData = employeesData.map(e => e.conversions);
    
    const maxValue = Math.max(...callsData, ...conversionsData);
    const barGroupWidth = chartWidth / employeeNames.length;
    const barWidth = (barGroupWidth - 10) / 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw bars
    employeeNames.forEach((name, i) => {
        const x = padding + barGroupWidth * i + 5;
        
        // Calls bar
        const callsHeight = (callsData[i] / maxValue) * chartHeight;
        const callsY = padding + chartHeight - callsHeight;
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(x, callsY, barWidth, callsHeight);
        
        // Conversions bar
        const convHeight = (conversionsData[i] / maxValue) * chartHeight;
        const convY = padding + chartHeight - convHeight;
        ctx.fillStyle = '#10b981';
        ctx.fillRect(x + barWidth, convY, barWidth, convHeight);
    });
    
    // Draw labels
    ctx.fillStyle = '#64748b';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    employeeNames.forEach((name, i) => {
        const x = padding + barGroupWidth * i + barGroupWidth / 2;
        ctx.fillText(name, x, padding + chartHeight + 20);
    });
}

function renderConversionRateChart() {
    drawBarChart('conversionRateChart', {
        labels: employeesData.map(e => e.name.split(' ')[0]),
        values: employeesData.map(e => parseFloat(calculateEmployeeConversionRate(e))),
        color: '#10b981',
        colorEnd: '#059669'
    });
}

function renderRevenueContributionChart() {
    drawBarChart('revenueContributionChart', {
        labels: employeesData.map(e => e.name.split(' ')[0]),
        values: employeesData.map(e => e.revenue),
        color: '#2563eb',
        colorEnd: '#1e40af'
    });
}

function initializeClientsPage() {
    const converted = clientsData.filter(c => c.status === "converted").length;
    const interested = clientsData.filter(c => c.status === "pending").length;
    const notInterested = clientsData.filter(c => c.status === "declined").length;
    
    document.getElementById('convertedClients').textContent = converted;
    document.getElementById('interestedClients').textContent = interested;
    document.getElementById('notInterestedClientsCount').textContent = notInterested;
    document.getElementById('totalClientsCount').textContent = clientsData.length;
    
    drawPieChart('clientOutcomeChart', {
        labels: ['Converted', 'Interested', 'Not Interested'],
        values: [converted, interested, notInterested],
        colors: ['#10b981', '#f59e0b', '#ef4444']
    });
    
    const satisfiedTrend = [72, 75, 78, 76, 80, 82, 85];
    drawLineChart('satisfactionTrendChart', {
        labels: ['W-1', 'W-2', 'W-3', 'W-4', 'W-5', 'W-6', 'W-7'],
        datasets: [
            { values: satisfiedTrend, color: '#10b981', label: 'Satisfaction %' }
        ]
    });
    
    // Client segmentation
    const highValue = clientsData.filter(c => c.revenue >= 10000).length;
    const mediumValue = clientsData.filter(c => c.revenue >= 5000 && c.revenue < 10000).length;
    const lowValue = clientsData.filter(c => c.revenue > 0 && c.revenue < 5000).length;
    const total = highValue + mediumValue + lowValue;
    
    document.getElementById('highValueCount').textContent = highValue;
    document.getElementById('highValueBar').style.width = ((highValue / total) * 100) + '%';
    
    document.getElementById('mediumValueCount').textContent = mediumValue;
    document.getElementById('mediumValueBar').style.width = ((mediumValue / total) * 100) + '%';
    
    document.getElementById('lowValueCount').textContent = lowValue;
    document.getElementById('lowValueBar').style.width = ((lowValue / total) * 100) + '%';
}

function initializeClientDetailsPage() {
    renderClientTable();
    
    const searchInput = document.getElementById('clientSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterClientTable(searchTerm);
        });
    }
}

function renderClientTable() {
    const tbody = document.getElementById('clientTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = clientsData.map(client => {
        const employee = getEmployeeById(client.employeeId);
        const statusClass = client.status === 'converted' ? 'converted' : client.status === 'pending' ? 'pending' : 'declined';
        const statusText = client.status === 'converted' ? 'Converted' : client.status === 'pending' ? 'Pending' : 'Not Interested';
        
        return `
            <tr data-client-name="${client.name.toLowerCase()}">
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${employee ? employee.name : 'N/A'}</td>
                <td>${client.calls}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>$${client.revenue.toLocaleString()}</td>
                <td>${'⭐'.repeat(client.rating)}</td>
                <td><button class="action-btn">View Details</button></td>
            </tr>
        `;
    }).join('');
}

function filterClientTable(searchTerm) {
    const rows = document.querySelectorAll('#clientTableBody tr');
    rows.forEach(row => {
        const clientName = row.getAttribute('data-client-name');
        if (clientName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function initializeConversionsPage() {
    const totalCalls = calculateTotalCalls();
    const totalConversions = clientsData.filter(c => c.status === "converted").length;
    const convRate = calculateConversionRate();
    
    document.getElementById('convTotalCalls').textContent = totalCalls.toLocaleString();
    document.getElementById('convTotalConversions').textContent = totalConversions;
    document.getElementById('convRate').textContent = convRate + '%';
    
    renderConversionFunnel();
    renderEmployeeConversionChart();
}

function renderConversionFunnel() {
    const container = document.getElementById('conversionFunnel');
    if (!container) return;
    
    const totalCalls = calculateTotalCalls();
    const interested = clientsData.filter(c => c.status === 'pending' || c.status === 'converted').length;
    const converted = clientsData.filter(c => c.status === 'converted').length;
    
    container.innerHTML = `
        <div class="funnel-stage">
            <div class="funnel-label">
                <span class="funnel-name">Total Calls Made</span>
                <span class="funnel-count">${totalCalls.toLocaleString()}</span>
            </div>
            <div class="funnel-bar" style="width: 100%">
                100% - Initial Contact
            </div>
        </div>
        <div class="funnel-stage">
            <div class="funnel-label">
                <span class="funnel-name">Interested Prospects</span>
                <span class="funnel-count">${interested}</span>
            </div>
            <div class="funnel-bar" style="width: ${(interested / totalCalls * 100)}%">
                ${((interested / totalCalls) * 100).toFixed(1)}% - Qualified Leads
            </div>
        </div>
        <div class="funnel-stage">
            <div class="funnel-label">
                <span class="funnel-name">Converted Clients</span>
                <span class="funnel-count">${converted}</span>
            </div>
            <div class="funnel-bar" style="width: ${(converted / totalCalls * 100)}%">
                ${((converted / totalCalls) * 100).toFixed(1)}% - Final Conversion
            </div>
        </div>
    `;
}

function renderEmployeeConversionChart() {
    drawBarChart('employeeConversionChart', {
        labels: employeesData.map(e => e.name.split(' ')[0]),
        values: employeesData.map(e => parseFloat(calculateEmployeeConversionRate(e))),
        color: '#10b981',
        colorEnd: '#059669'
    });
}

function initializeRatingsPage() {
    renderEmployeeRatings();
    renderRatingDistributionChart();
    renderRatingTrendsChart();
    renderFeedbackList();
}

function renderEmployeeRatings() {
    const container = document.getElementById('employeeRatings');
    if (!container) return;
    
    container.innerHTML = employeesData.map(emp => `
        <div class="employee-rating-card">
            <div class="rating-header">
                <span class="rating-name">${emp.name}</span>
                <span class="rating-score">${emp.rating}</span>
            </div>
            <div class="rating-stars">${'⭐'.repeat(Math.round(emp.rating))}</div>
        </div>
    `).join('');
}

function renderRatingDistributionChart() {
    const ratingCounts = [0, 0, 0, 0, 0];
    clientsData.forEach(client => {
        if (client.rating >= 1 && client.rating <= 5) {
            ratingCounts[client.rating - 1]++;
        }
    });
    
    drawBarChart('ratingDistributionChart', {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        values: ratingCounts,
        color: '#f59e0b',
        colorEnd: '#d97706'
    });
}

function renderRatingTrendsChart() {
    const monthlyRatings = [4.2, 4.3, 4.4, 4.5, 4.4, 4.6];
    drawLineChart('ratingTrendsChart', {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            { values: monthlyRatings, color: '#10b981', label: 'Average Rating' }
        ]
    });
}

function renderFeedbackList() {
    const container = document.getElementById('feedbackList');
    if (!container) return;
    
    container.innerHTML = feedbackData.map(feedback => `
        <div class="feedback-item">
            <div class="feedback-header">
                <span class="feedback-client">${feedback.client}</span>
                <span class="feedback-date">${feedback.date}</span>
            </div>
            <div class="rating-stars">${'⭐'.repeat(feedback.rating)}</div>
            <p class="feedback-text">${feedback.comment}</p>
            <p style="font-size: 0.8125rem; color: #64748b; margin-top: 0.5rem;">Employee: ${feedback.employee}</p>
        </div>
    `).join('');
}

// ============================================================================
// MOBILE NAVIGATION
// ============================================================================

function initializeMobileNav() {
    const toggle = document.getElementById('mobileNavToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ============================================================================
// PAGE ROUTER
// ============================================================================

function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    initializeMobileNav();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeDashboard();
            break;
        case 'employees.html':
            initializeEmployeesPage();
            break;
        case 'clients.html':
            initializeClientsPage();
            break;
        case 'client-details.html':
            initializeClientDetailsPage();
            break;
        case 'conversions.html':
            initializeConversionsPage();
            break;
        case 'ratings.html':
            initializeRatingsPage();
            break;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
