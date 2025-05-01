document.addEventListener('DOMContentLoaded', function() {
    // Service data with detailed content
    const servicesData = [
        {
            id: "health-insurance-consultation",
            title: "Health Insurance Consultation",
            icon: "fa-notes-medical",
            description: `
                <h2>🏥 Health Insurance Consultation Guide</h2>
                
                <p>Why Health Insurance is Non-Negotiable in 2024</p>
                
                <p>Healthcare costs in India are skyrocketing. Here's why you MUST have health insurance today:</p>
                
                <div class="highlight-box">
                    <h4>Key Statistics</h4>
                    <div class="data-point">
                        <span>🔹 Medical Inflation:</span> India's medical inflation stood at 14% in 2023, one of the highest globally. (Source: Deloitte India Report)
                    </div>
                    <div class="data-point">
                        <span>🔹 Treatment Costs:</span> Treatment costs are doubling every 5–6 years which is quite alarming situation.
                    </div>
                </div>
                
                <h3>Hospitalization Costs</h3>
                <ul>
                    <li>Average cost of a single hospitalization for COVID-19 or cardiac emergency: ₹2 lakh–₹5 lakh.</li>
                    <li>In top cities (Mumbai, Delhi, Bangalore), even simple surgeries can cost ₹3–₹7 lakh, while other costs 8-15 lacs or even more.</li>
                </ul>
                
                <h3>Emergency Risk</h3>
                <ul>
                    <li>70% of Indian families use out-of-pocket savings for healthcare.</li>
                    <li>17% of families fall below the poverty line every year due to medical emergencies. (Source: NITI Aayog)</li>
                </ul>
                
                <h3>Lifestyle Diseases Rising</h3>
                <ul>
                    <li>1 in 4 Indians around 25% under 40 suffers from hypertension, diabetes, or cholesterol problems. (Source: Indian Heart Association)</li>
                    <li>Early hospitalizations due to heart attack, kidney failure, cancer are increasing every year.</li>
                </ul>
                
                <h3>How Health Insurance Helps You – Here is Solution</h3>
                <ul>
                    <li>Covers Major Medical Expenses: No need to wipe out your savings for hospitalization, surgeries, ICU care, or expensive treatments.</li>
                    <li>Cashless Hospitalization: Network hospitals allow cashless admission — you focus on recovery, not paperwork.</li>
                    <li>Tax Benefits: Premium paid for health insurance qualifies for deduction under Section 80D (up to ₹25,000; ₹50,000 for senior citizens).</li>
                    <li>Protects Wealth Over Long-Term: Without insurance, even one surgery can wipe out years of hard-earned savings and even can get you under debt trap because of big Hospitalisation bills.</li>
                    <li>Access to Better Healthcare: With a strong health cover, you can choose better hospitals, top doctors, faster treatments without worrying about costs.</li>
                    <li>Peace of Mind: You can sleep peacefully knowing you're protected against sudden medical emergencies.</li>
                </ul>
                
                <h3>Who Should Definitely Get Covered?</h3>
                <ul>
                    <li>👨‍💻 Working professionals (age 22–60)</li>
                    <li>👩‍👩‍👧‍👦 Young couples planning a family</li>
                    <li>👴👵 Parents above 55 years (higher medical risks)</li>
                    <li>👶 Children (from Day 1, newborn cover available)</li>
                    <li>🧳 Frequent travellers and expats living abroad temporarily</li>
                </ul>
                
                <h3>Common Mistakes People Make (And How to Avoid Them)</h3>
                <ul>
                    <li>🚫 Choosing cheapest policy without understanding hidden terms (room rent limits, disease caps, copay etc ).</li>
                    <li>🚫 Relying only on employer-provided group insurance (which ends when you change jobs).</li>
                    <li>🚫 Ignoring Super Top-Up options (huge mistake especially for urban families).</li>
                    <li>🚫 Not disclosing existing illnesses honestly (claims get rejected later).</li>
                    <li>🚫 Delaying Health Insurance, ignoring concept of Pre Existing Waiting Period.</li>
                    <li>🚫 Coming to Buy Health Insurance when disease is diagnosed by doctor, resulting in sometimes not getting health cover as PED ( Pre Existing Disease). Better to get health cover when Fit & Fine and Don't Delay.</li>
                </ul>
                
                <h3>Our 3-Step Health Insurance Consultation Process</h3>
                <ol>
                    <li>Understand your medical history and family size.</li>
                    <li>Suggest best-fit policies: 2–3 plans from top-rated insurers based on YOUR needs.</li>
                    <li>Help with smooth onboarding — fully paperless if you wish!</li>
                </ol>
                
                <p>✅ 5+ years of advisory experience<br>
                ✅ Client-first always</p>
                
                <div class="highlight-box">
                    <h4>🛡️ Secure Your Health — Protect Your Wealth</h4>
                    <p>Book your FREE consultation and get an expert review of your health insurance needs today!</p>
                </div>
            `
        },
        {
            id: "term-life-insurance-advisory",
            title: "Term Life Insurance Advisory",
            icon: "fa-heart-pulse",
            description: `
                <h2>Term Life Insurance Advisory</h2>
                <p>Why Term Insurance is a Must (2024)</p>
                <ul>
                    <li>95% of Indians are either uninsured or underinsured. (Outlook Money, 2023)</li>
                    <li>80% of policies sold are costly endowment plans, not pure protection.</li>
                    <li>A ₹1 crore term plan can cost just ₹500–₹800/month — pure financial security.</li>
                </ul>
                <p>Without proper coverage, your family risks financial struggle if something happens to you.</p>
                <h3>How Term Insurance Helps</h3>
                <ul>
                    <li>✅ Provides a large lump-sum payout to your family</li>
                    <li>✅ Ensures your family’s expenses, loans, and dreams are protected</li>
                    <li>✅ Offers affordable, high-value protection</li>
                    <li>✅ Comes with tax benefits under Section 80C and 10(10D)</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Taking too little coverage (Rule: At least 10–20× your annual income)</li>
                    <li>🚫 Ignoring important riders (Critical Illness, Accidental Death Benefit)</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ Focus only on pure term insurance</li>
                    <li>✅ 5+ years of financial advisory experience (CA, Finance Enthusiast)</li>
                    <li>✅ Selection of Right and best insurer as per your Requirement</li>
                </ul>
                <p>📩 Book Your Free Term Insurance Consultation — Secure your family’s future the smart, affordable way.</p>
            `
        },
        {
            id: "mutual-fund-consultation",
            title: "Mutual Fund Consultation",
            icon: "fa-money-check-dollar",
            description: `
                <h2>Mutual Fund Consultation</h2>
                <p>Why Mutual Funds Are a Smart Investment (2025)</p>
                <ul>
                    <li>Mutual funds have delivered 12%–15% average annual returns over the past 10 years. (Morningstar)</li>
                    <li>Invest via SIPs from as low as ₹100/month</li>
                    <li>Mutual funds are diversified, reducing risk compared to direct stocks</li>
                </ul>
                <h3>How Mutual Funds Help</h3>
                <ul>
                    <li>✅ Wealth Creation with SIPs</li>
                    <li>✅ Diversified portfolio reduces risk</li>
                    <li>✅ ELSS provides tax benefits under Section 80C</li>
                    <li>✅ Choose between equity, debt, hybrid, or international funds</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Investing without defined goals or timelines</li>
                    <li>🚫 Relying solely on past returns</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ Goal-based planning & asset allocation</li>
                    <li>✅ Personalized advice for portfolio improvement</li>
                </ul>
                <p>📩 Book Your Free Mutual Fund Consultation — Start investing smartly.</p>
            `
        },
        {
            id: "portfolio-review",
            title: "Portfolio Review",
            icon: "fa-address-book",
            description: `
                <h2>📊 Portfolio Review Consultation Guide</h2>
                <p>Why Portfolio Review is Crucial (2025)</p>
                <ul>
                    <li>40% of Indian investors neglect portfolio reviews. (Economic Times)</li>
                    <li>Rebalancing is key to aligning with financial goals.</li>
                </ul>
                <h3>How Portfolio Review Helps</h3>
                <ul>
                    <li>✅ Identifies underperformance</li>
                    <li>✅ Reduces overexposure to risk</li>
                    <li>✅ Optimizes tax and asset allocation</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Overconcentration in assets</li>
                    <li>🚫 Ignoring asset allocation</li>
                    <li>🚫 Copy-pasting others’ portfolios</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ Deep diagnostics on your full investment portfolio</li>
                    <li>✅ Honest rebalancing advice</li>
                </ul>
                <p>📩 Book Your Free Portfolio Review — Get your portfolio on track.</p>
            `
        },
        {
            id: "wealth-management",
            title: "Wealth Management",
            icon: "fa-dollar-sign",
            description: `
                <h2>💼 Wealth Management Consultation Guide</h2>
                <p>Why Wealth Management is Essential (2025)</p>
                <ul>
                    <li>50% of HNWIs lack proper wealth plans (Capgemini, 2023)</li>
                    <li>Strategic planning ensures wealth growth & preservation</li>
                </ul>
                <h3>How Wealth Management Helps</h3>
                <ul>
                    <li>✅ Custom strategies for assets, taxes, and estate</li>
                    <li>✅ Investment diversification across equity, debt, real estate, etc.</li>
                    <li>✅ Tax and inheritance optimization</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Relying too much on one asset class</li>
                    <li>🚫 No estate or tax plan</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ Trusted advice for high-net-worth individuals</li>
                    <li>✅ Cross-generational wealth strategies</li>
                </ul>
                <p>📩 Book Your Free Wealth Management Consultation — Secure your legacy.</p>
            `
        },
        {
            id: "financial-planning",
            title: "Financial Planning",
            icon: "fa-coins",
            description: `
                <h2>🧩 Financial Planning Consultation Guide</h2>
                <p>Why Financial Planning is Key (2025)</p>
                <ul>
                    <li>50% of Indians don’t have a formal financial plan (National Survey, 2023)</li>
                    <li>84% of millennials are unsure about retirement savings</li>
                </ul>
                <h3>How Financial Planning Helps</h3>
                <ul>
                    <li>✅ Goal setting: short, medium & long-term</li>
                    <li>✅ Budgeting, investments, insurance & debt management</li>
                    <li>✅ Protection against unexpected life events</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Ignoring inflation in long-term goals</li>
                    <li>🚫 Not building an emergency fund</li>
                    <li>🚫 Overlooking high-interest debt</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ End-to-end guidance across all areas of financial life</li>
                    <li>✅ 5+ years of experience helping clients plan effectively</li>
                </ul>
                <p>📩 Book Your Free Financial Planning Consultation — Your roadmap to financial clarity.</p>
            `
        },
        {
            id: "tax-planning",
            title: "Tax Planning Consultation",
            icon: "fa-receipt",
            description: `
                <h2>🧾 Tax Planning Consultation Guide</h2>
                <p>Why Tax Planning is Crucial (2024)</p>
                <ul>
                    <li>Income tax in India can eat up to 30% of your earnings if not planned properly.</li>
                    <li>Over ₹1 lakh crore is lost annually due to unoptimized tax planning. (Source: Economic Times, 2023)</li>
                    <li>Smart tax planning can save up to ₹1.5 lakh per year under Section 80C alone.</li>
                </ul>
                <p>Proper tax planning isn’t just about saving money — it’s about growing your wealth efficiently.</p>
                <h3>How Tax Planning Helps</h3>
                <ul>
                    <li>✅ Maximizes Deductions: Utilize exemptions under 80C, 80D, and more</li>
                    <li>✅ Reduces Tax Burden: Save via ELSS, NPS, etc.</li>
                    <li>✅ Invest Tax Efficiently: Choose tax-optimized investments</li>
                    <li>✅ Prevents Penalties: File taxes on time with accuracy</li>
                </ul>
                <h3>Common Mistakes to Avoid</h3>
                <ul>
                    <li>🚫 Ignoring 80C/80D deductions</li>
                    <li>🚫 Choosing poor tax-saving instruments</li>
                    <li>🚫 Not reviewing your tax plan annually</li>
                </ul>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>✅ Tailored tax-saving strategies for your goals</li>
                    <li>✅ 5+ years of experience in tax planning</li>
                    <li>✅ Expert, unbiased advice</li>
                </ul>
                <p>📩 Book Your Free Tax Planning Consultation — Maximize savings and invest smarter with the right tax strategies.</p>
            `
        }
    ];
    
    // Get URL parameters to determine which service to display
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id') || 'health-insurance'; // Default to health insurance if no ID
    
    // Find the selected service
    const selectedService = servicesData.find(service => service.id === serviceId) || servicesData[0];
    
    // Update page content based on selected service
    document.getElementById('service-breadcrumb').textContent = selectedService.title;
    document.getElementById('service-title').textContent = selectedService.title;
    document.getElementById('service-icon').className = `fa-solid ${selectedService.icon}`;
    document.getElementById('service-description').innerHTML = selectedService.description;
    document.getElementById('formServiceName').value = selectedService.title;
    
    // Update page title
    document.title = `${selectedService.title} | CA Himani Gupta`;
    
    // Generate related services (excluding current service)
    const relatedServices = servicesData
        .filter(service => service.id !== serviceId)
        .slice(0, 3); // Show only 3 related services
    
    const relatedServicesContainer = document.getElementById('related-services-grid');
    
    relatedServices.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>5</span>
                </div>
            </div>
            <div class="service-info">
                <h3>${service.title}</h3>
                <p>${service.description.split('</p>')[0].replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
            </div>
            <div class="service-booking">
                <div class="meeting-info">
                    <i class="far fa-calendar"></i>
                    <div>
                        <p class="duration">30 mins</p>
                        <p class="meeting-type">Video Meeting</p>
                    </div>
                </div>
                <button class="price-btn" data-id="${service.id}">Schedule <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        
        relatedServicesContainer.appendChild(serviceCard);
    });
    
    // Add event listeners to related service buttons
    document.querySelectorAll('.price-btn[data-id]').forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-id');
            window.location.href = `service-detail.html?id=${serviceId}`;
        });
    });
    
    // Form submission handling
    const scheduleForm = document.getElementById('scheduleForm');
    
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            // In a real implementation, you would use FormSpark's endpoint
            // This is for demonstration purposes only
            
            e.preventDefault();
            
            // Validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            // Check if at least one preferred date is selected
            const preferredDates = document.querySelectorAll('input[name="preferred_dates[]"]:checked');
            const dateCheckboxes = document.querySelector('.date-checkboxes');
            
            if (preferredDates.length === 0) {
                isValid = false;
                dateCheckboxes.style.border = '1px solid red';
                dateCheckboxes.style.padding = '10px';
                dateCheckboxes.style.borderRadius = '5px';
            } else {
                dateCheckboxes.style.border = '';
                dateCheckboxes.style.padding = '';
            }
            
            if (!isValid) {
                // Show error message
                alert('Please fill in all required fields and select at least one preferred date.');
                return;
            }
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Get multiple checkbox values
            formValues.preferred_dates = [];
            preferredDates.forEach(checkbox => {
                formValues.preferred_dates.push(checkbox.value);
            });
            
            console.log('Form data to be submitted:', formValues);
            
            // Show success message (in a real implementation, this would happen after successful submission)
            const submitBtn = this.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Submitting...</span>';
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Consultation Scheduled!</span> <i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Reset form
                this.reset();
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div style="background-color: #4CAF50; color: white; padding: 20px; border-radius: 5px; margin-top: 20px; text-align: center;">
                        <h3 style="margin-bottom: 10px;">Thank You!</h3>
                        <p>Your consultation request has been received. We'll contact you within 24 hours to confirm your appointment.</p>
                    </div>
                `;
                
                scheduleForm.parentNode.appendChild(successMessage);
                
                // Reset button after 5 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.backgroundColor = '';
                }, 5000);
            }, 2000);
        });
    }
    
    // Initialize mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
