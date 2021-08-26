(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{389:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Currently, we are waiting for the Tufts IRB to give us permission to release the participants' data. (We are almost there, and we apologize for the inconvenience).")]),e._v(" "),t("p",[e._v("If you want to download the data or have any questions, please reach out to Leon (leonwang_at_cs.tufts.edu).")]),e._v(" "),t("h2",{attrs:{id:"paper-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paper-information"}},[e._v("#")]),e._v(" Paper Information")]),e._v(" "),t("p",[e._v("Zhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*\n“The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize” NeurIPS 2021 Datasets and Benchmarks Track (Round 2)")]),e._v(" "),t("p",[e._v("*Lead authors ZH & LW contributed equally, as did supervisory authors RJ & MCH")]),e._v(" "),t("h2",{attrs:{id:"project-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-description"}},[e._v("#")]),e._v(" Project Description")]),e._v(" "),t("p",[e._v("Functional near-infrared spectroscopy (fNIRS) promises a non-intrusive way to measure real-time brain activity and build responsive brain-computer interfaces. However, in its first decade of research this technology has not yet realized its potential.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("One common "),t("strong",[e._v("barrier")]),e._v(" to effective fNIRS-based BCIs is "),t("strong",[t("em",[e._v("the lack of available data")])]),e._v(". Previous work typically collects proprietary datasets from only 10-20 subjects.")])]),e._v(" "),t("li",[t("p",[e._v("Another "),t("strong",[e._v("barrier")]),e._v(" to progress is the lack of a "),t("strong",[t("em",[e._v("standardized evaluation protocol")])]),e._v(". Without standardized protocols, different papers may not follow the very same experimental design, making results incomparable and preventing scientific progress.")])]),e._v(" "),t("li",[t("p",[e._v("The toughest "),t("strong",[e._v("barrier")]),e._v(" of all to developing an accurate mental workload classifier is "),t("strong",[t("em",[e._v("the high variation in fNIRS data")])]),e._v(", which makes generalizing to a new subject or session challenging.")])])]),e._v(" "),t("p",[e._v("Our "),t("strong",[e._v("contributions")]),e._v(" are:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("We release a large open-access dataset of "),t("a",{attrs:{href:""}},[e._v("68")]),e._v(" participants. This dataset is the largest known to us by a factor of 2.5. Details are in "),t("a",{attrs:{href:""}},[e._v("Section Dataset")]),e._v(" below.")])]),e._v(" "),t("li",[t("p",[e._v("We suggest a standardized evaluation practice for assessing method performance on our dataset under three paradigms of training: subject-specific, generic, and generic + fine-tuning. clear instructions and code are provided in "),t("a",{attrs:{href:""}},[e._v("Section Code")]),e._v(" below.")])])]),e._v(" "),t("h2",{attrs:{id:"dataset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[e._v("#")]),e._v(" Dataset")]),e._v(" "),t("p",[e._v("Public dataset release pending imminent approval from IRB.\n")]),e._v(" "),t("h3",{attrs:{id:"data-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-description"}},[e._v("#")]),e._v(" Data Description")]),e._v(" "),t("p",[e._v("Totally, our large open-access dataset includes "),t("strong",[e._v("68")]),e._v(" participants. Each subject contributes "),t("strong",[e._v("21.33")]),e._v(" minutes of fNIRS recordings from a controlled experimental setting with corresponding labels of workload intensity.")]),e._v(" "),t("h3",{attrs:{id:"data-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[e._v("#")]),e._v(" Data Structure")]),e._v(" "),t("p",[e._v("."),t("br")]),e._v(" "),t("ul",[t("li",[e._v("qualified_subjects_list.docx")]),e._v(" "),t("li",[e._v("pre-experiment\n"),t("ul",[t("li",[e._v("Visual\n- sub_xx.csv")])])]),e._v(" "),t("li",[e._v("experiment\n"),t("ul",[t("li",[e._v("Visual\n- sub_xx.csv")])])]),e._v(" "),t("li",[e._v("post-experiment\n"),t("ul",[t("li",[e._v("Visual\n- sub_xx.csv")])])])]),e._v(" "),t("p",[e._v("├── pexperiment"),t("br"),e._v("\n|\n|\n├── pre-experiment"),t("br")]),e._v(" "),t("h3",{attrs:{id:"data-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-format"}},[e._v("#")]),e._v(" Data Format")]),e._v(" "),t("h4",{attrs:{id:"pre-experiment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-experiment"}},[e._v("#")]),e._v(" Pre-experiment")]),e._v(" "),t("p",[e._v("It includes the non sensitive personal data we collect before the experiment.")]),e._v(" "),t("h4",{attrs:{id:"experiment-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#experiment-data"}},[e._v("#")]),e._v(" Experiment Data")]),e._v(" "),t("p",[e._v("All fNIRS data store here, along with the n-back tasks accuracy and experiment log.")]),e._v(" "),t("ol",[t("li",[e._v("raw data;")]),e._v(" "),t("li",[e._v("band-pass-filtered;\n2.a. bpf_raw_data;\n2.b. bpf_filtered_slide_window_data;")])]),e._v(" "),t("h4",{attrs:{id:"supplementary-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supplementary-data"}},[e._v("#")]),e._v(" Supplementary Data")]),e._v(" "),t("h5",{attrs:{id:"demographic-and-contextual-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demographic-and-contextual-information"}},[e._v("#")]),e._v(" Demographic and contextual information")]),e._v(" "),t("h5",{attrs:{id:"subjective-workload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subjective-workload"}},[e._v("#")]),e._v(" Subjective workload")]),e._v(" "),t("h5",{attrs:{id:"post-experiment-interview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-experiment-interview"}},[e._v("#")]),e._v(" Post-experiment interview")]),e._v(" "),t("h2",{attrs:{id:"code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" Code")]),e._v(" "),t("h2",{attrs:{id:"paper-link-and-please-cite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paper-link-and-please-cite"}},[e._v("#")]),e._v(" Paper link and Please Cite")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://openreview.net/forum?id=QzNHE7QHhut",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper link"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);