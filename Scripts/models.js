function OpenModelRefund() {
    // stop link default behavior
    event.preventDefault();
    const refundModel = document.createElement('div');
    refundModel.id = 'refundModel';
    refundModel.classList.add('model', 'container-fluid', 'position-fixed', 'bottom-0', 'start-0', 'end-0', 'h-100', 'py-5');
    refundModel.style.cssText = 'z-index: 10000; backdrop-filter: blur(3px); overflow: hidden auto; scrollbar-width: thin; scrollbar-color: var(--blue-200) var(--bg-gray-50); height: 100%;';
    refundModel.innerHTML = `
        <div class="container d-flex justify-content-center align-items-start w-100">
            <div class="model bg-white rounded-5 border px-4 py-5 fly-shadow" style="max-width: 600px; width: 100%; min-height: 200px;">
                <div class="model-header d-flex justify-content-between align-items-center mb-3">
                    <h6 class="fs-4 fw-bold"><i class="fi fi-rr-indian-rupee-sign me-2"></i>Refund Policy</h6>
                    <button class="btn btn-close" onclick="CloseRefundModel()"></button>
                </div>
                <div class="model-body">
                    <p class="mb-3">At Future Marg, we are committed to ensuring your satisfaction with our services. If you are not completely satisfied with your purchase, we offer a refund policy as outlined below:</p>
                    <h6 class="fw-bold mb-1">1. Eligibility for Refunds</h6>
                    <p class="mb-3">Refunds are eligible within 7 days of purchase, provided that you have not accessed more than 20% of the course content or services.</p>
                    <h6 class="fw-bold mb-1">2. Non-Refundable Items</h6>
                    <p class="mb-3">The following items are non-refundable: Customized services, one-on-one mentoring sessions, and any digital products that have been fully accessed.</p>
                    <h6 class="fw-bold mb-1">3. Refund Process</h6>
                    <p class="mb-3">To request a refund, please contact our support team at <a href="mailto:futuremarg.in@gmail.com" class="link primary-link">futuremarg.in@gmail.com</a> within the eligibility period. Include your order details and reason for the refund request. Once your request is received, we will review it and notify you of the approval or rejection of your refund.</p>
                    <h6 class="fw-bold mb-1">4. Processing Time</h6>
                    <p class="mb-3">If your refund is approved, it will be processed within 7-10 business days. The refund will be issued to the original payment method used during the purchase.</p>
                    <h6 class="fw-bold mb-1">5. Contact Us</h6>
                    <p class="mb-3">If you have any questions or concerns regarding our refund policy, please contact us at <a href="mailto:futuremarg.in@gmail.com" class="link primary-link">futuremarg.in@gmail.com</a> or call us at +91 9319492497. We are here to assist you.</p>
                    <p class="mb-0 fw-semibold">Thank You!</p>
                </div>
                <div class="model-footer"></div>
            </div>
        </div>
    `;
    document.body.appendChild(refundModel);
}
function CloseRefundModel() {
    const refundModel = document.getElementById('refundModel');
    refundModel.remove();
}



function OpenModelPrivacy() {
    // stop link default behavior
    event.preventDefault();
    const privacyModel = document.createElement('div');
    privacyModel.id = 'privacyModel';
    privacyModel.classList.add('model', 'container-fluid', 'position-fixed', 'bottom-0', 'start-0', 'end-0', 'h-100', 'py-5');
    privacyModel.style.cssText = 'z-index: 10000; backdrop-filter: blur(3px); overflow: hidden auto; scrollbar-width: thin; scrollbar-color: var(--blue-200) var(--bg-gray-50); height: 100%;';
    privacyModel.innerHTML = `
        <div class="container d-flex justify-content-center align-items-start w-100">
            <div class="bg-white rounded-5 border px-4 py-5 fly-shadow" style="max-width: 600px; width: 100%; min-height: 200px;">
                <div class="model-header d-flex justify-content-between align-items-center mb-3">
                    <h6 class="fs-4 fw-bold"><i class="fi fi-rr-lock-hashtag me-2"></i>Privacy Policy</h6>
                    <button class="btn btn-close" onclick="ClosePrivacyModel()"></button>
                </div>
                <div class="model-body">
                    <p class="mb-3">
                        At Future Marg, we prioritize the confidentiality and security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data while delivering our services.
                    </p>
                    <h6 class="fw-bold mb-1">1. Information We Collect</h6>
                    <p class="mb-3">
                        We collect personal information such as your name, contact details, email address, payment information, and any data voluntarily provided during registration, course usage, or communication with our team.
                    </p>
                    <h6 class="fw-bold mb-1">2. Use of Your Information</h6>
                    <p class="mb-3">
                        Your information is used solely to deliver and improve our services, manage your account, process payments, provide support, and send essential updates. We do not sell or trade your data.
                    </p>
                    <h6 class="fw-bold mb-1">3. Data Security Measures</h6>
                    <p class="mb-3">
                        We implement strict security measures to protect your data from unauthorized access, alteration, or misuse. All sensitive information is encrypted and stored on secure servers.
                    </p>
                    <h6 class="fw-bold mb-1">4. Sharing of Information</h6>
                    <p class="mb-3">
                        We may share your information only with trusted third-party partners involved in payment processing, platform operations, or customer support—strictly for service delivery purposes. No data is shared for marketing or external commercial use.
                    </p>
                    <h6 class="fw-bold mb-1">5. User Rights</h6>
                    <p class="mb-3">
                        You may request access, correction, or deletion of your personal data at any time. For such requests, please reach out to us through the contact details below.
                    </p>
                    <h6 class="fw-bold mb-1">6. Cookies & Tracking</h6>
                    <p class="mb-3">
                        Our website may use cookies to enhance your browsing experience and improve platform performance. You can manage or disable cookies through your browser settings.
                    </p>
                    <h6 class="fw-bold mb-1">7. Policy Updates</h6>
                    <p class="mb-3">
                        Future Marg reserves the right to modify or update this Privacy Policy at any time. Any changes will be communicated through our website or via email notifications.
                    </p>
                    <h6 class="fw-bold mb-1">8. Contact Us</h6>
                    <p class="mb-3">
                        For any questions or concerns regarding our Privacy Policy, feel free to reach us at
                        <a href="mailto:futuremarg.in@gmail.com" class="link primary-link">futuremarg.in@gmail.com</a>
                        or call us at +91 9319492497. We're here to help.
                    </p>
                    <p class="mb-0 fw-semibold">Thank You!</p>
                </div>

                <div class="model-footer"></div>
            </div>
        </div>
    `;
    document.body.appendChild(privacyModel);
}
function ClosePrivacyModel() {
    const privacyModel = document.getElementById('privacyModel');
    privacyModel.remove();
}